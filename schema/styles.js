"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// tslint:disable
// TODO: cleanup this file, it's copied as is from Angular CLI.
Object.defineProperty(exports, "__esModule", {
  value: true
});
const path = require("path");
const webpack_1 = require("../../plugins/webpack");
const utils_1 = require("./utils");
const find_up_1 = require("../../utilities/find-up");
const webpack_2 = require("../../plugins/webpack");
const utils_2 = require("./utils");
const postcssUrl = require('postcss-url');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssImports = require('postcss-import');
const PostcssCliResources = require('../../plugins/webpack').PostcssCliResources;

function getStylesConfig(wco) {
  const {
    root,
    projectRoot,
    buildOptions
  } = wco;
  // const appRoot = path.resolve(projectRoot, appConfig.root);
  const entryPoints = {};
  const globalStylePaths = [];
  const extraPlugins = [];
  const cssSourceMap = buildOptions.sourceMap;
  // Maximum resource size to inline (KiB)
  const maximumInlineSize = 10;
  // Determine hashing format.
  const hashFormat = utils_1.getOutputHashFormat(buildOptions.outputHashing);
  // Convert absolute resource URLs to account for base-href and deploy-url.
  const baseHref = wco.buildOptions.baseHref || '';
  const deployUrl = wco.buildOptions.deployUrl || '';
  const postcssPluginCreator = function (loader) {
    return [
      postcssImports({
        resolve: (url, context) => {
          return new Promise((resolve, reject) => {
            let hadTilde = false;
            if (url && url.startsWith('~')) {
              url = url.substr(1);
              hadTilde = true;
            }
            loader.resolve(context, (hadTilde ? '' : './') + url, (err, result) => {
              if (err) {
                if (hadTilde) {
                  reject(err);
                  return;
                }
                loader.resolve(context, url, (err, result) => {
                  if (err) {
                    reject(err);
                  } else {
                    resolve(result);
                  }
                });
              } else {
                resolve(result);
              }
            });
          });
        },
        load: (filename) => {
          return new Promise((resolve, reject) => {
            loader.fs.readFile(filename, (err, data) => {
              if (err) {
                reject(err);
                return;
              }
              const content = data.toString();
              resolve(content);
            });
          });
        }
      }),
      postcssUrl({
        filter: ({
          url
        }) => url.startsWith('~'),
        url: ({
          url
        }) => {
          // Note: This will only find the first node_modules folder.
          const nodeModules = find_up_1.findUp('node_modules', projectRoot);
          if (!nodeModules) {
            throw new Error('Cannot locate node_modules directory.');
          }
          const fullPath = path.join(nodeModules, url.substr(1));
          return path.relative(loader.context, fullPath).replace(/\\/g, '/');
        }
      }),
      postcssUrl([{
          // Only convert root relative URLs, which CSS-Loader won't process into require().
          filter: ({
            url
          }) => url.startsWith('/') && !url.startsWith('//'),
          url: ({
            url
          }) => {
            if (deployUrl.match(/:\/\//) || deployUrl.startsWith('/')) {
              // If deployUrl is absolute or root relative, ignore baseHref & use deployUrl as is.
              return `${deployUrl.replace(/\/$/, '')}${url}`;
            } else if (baseHref.match(/:\/\//)) {
              // If baseHref contains a scheme, include it as is.
              return baseHref.replace(/\/$/, '') +
                `/${deployUrl}/${url}`.replace(/\/\/+/g, '/');
            } else {
              // Join together base-href, deploy-url and the original URL.
              // Also dedupe multiple slashes into single ones.
              return `/${baseHref}/${deployUrl}/${url}`.replace(/\/\/+/g, '/');
            }
          }
        },
        {
          // TODO: inline .cur if not supporting IE (use browserslist to check)
          filter: (asset) => {
            return maximumInlineSize > 0 && !asset.hash && !asset.absolutePath.endsWith('.cur');
          },
          url: 'inline',
          // NOTE: maxSize is in KB
          maxSize: maximumInlineSize,
          fallback: 'rebase',
        },
        {
          url: 'rebase'
        },
      ]),
      PostcssCliResources({
        deployUrl: loader.loaders[loader.loaderIndex].options.ident == 'extracted' ? '' : deployUrl,
        loader,
        filename: `[name]${hashFormat.file}.[ext]`,
      }),
      autoprefixer({
        grid: true
      }),
    ];
  };
  // use includePaths from appConfig
  const includePaths = [];
  let lessPathOptions = {
    paths: []
  };
  if (buildOptions.stylePreprocessorOptions &&
    buildOptions.stylePreprocessorOptions.includePaths &&
    buildOptions.stylePreprocessorOptions.includePaths.length > 0) {
    buildOptions.stylePreprocessorOptions.includePaths.forEach((includePath) => includePaths.push(path.resolve(root, includePath)));
    lessPathOptions = {
      paths: includePaths,
    };
  }
  // Process global styles.
  if (buildOptions.styles.length > 0) {
    utils_2.normalizeExtraEntryPoints(buildOptions.styles, 'styles').forEach(style => {
      const resolvedPath = path.resolve(root, style.input);
      // Add style entry points.
      if (entryPoints[style.bundleName]) {
        entryPoints[style.bundleName].push(resolvedPath);
      } else {
        entryPoints[style.bundleName] = [resolvedPath];
      }
      // Add global css paths.
      globalStylePaths.push(resolvedPath);
    });
  }
  // set base rules to derive final rules from
  const baseRules = [{
      test: /\.css$/,
      use: []
    },
    {
      test: /\.scss$|\.sass$/,
      use: [{
        loader: 'sass-loader',
        options: {
          sourceMap: cssSourceMap,
          // bootstrap-sass requires a minimum precision of 8
          precision: 8,
          includePaths
        }
      }]
    },
    {
      test: /\.less$/,
      use: [{
        loader: 'less-loader',
        options: Object.assign({
          sourceMap: cssSourceMap,
          javascriptEnabled: true
        }, lessPathOptions)
      }]
    },
    {
      test: /\.styl$/,
      use: [{
        loader: 'stylus-loader',
        options: {
          sourceMap: cssSourceMap,
          paths: includePaths
        }
      }]
    }
  ];
  // load component css as raw strings
  const rules = baseRules.map(({
    test,
    use
  }) => ({
    exclude: globalStylePaths,
    test,
    use: [{
        loader: 'raw-loader'
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'embedded',
          plugins: postcssPluginCreator,
          sourceMap: cssSourceMap
        }
      },
      ...use
    ]
  }));
  // load global css as css files
  if (globalStylePaths.length > 0) {
    rules.push(...baseRules.map(({
      test,
      use
    }) => {
      const extractTextPlugin = {
        use: [
          // style-loader still has issues with relative url()'s with sourcemaps enabled;
          // even with the convertToAbsoluteUrls options as it uses 'document.location'
          // which breaks when used with routing.
          // Once style-loader 1.0 is released the following conditional won't be necessary
          // due to this 1.0 PR: https://github.com/webpack-contrib/style-loader/pull/219
          {
            loader: buildOptions.extractCss ? webpack_2.RawCssLoader : 'raw-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: buildOptions.extractCss ? 'extracted' : 'embedded',
              plugins: postcssPluginCreator,
              sourceMap: cssSourceMap
            }
          },
          ...use
        ],
        // publicPath needed as a workaround https://github.com/angular/angular-cli/issues/4035
        publicPath: ''
      };
      const ret = {
        include: globalStylePaths,
        test,
        use: [
          buildOptions.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
          ...extractTextPlugin.use,
        ]
      };
      // Save the original options as arguments for eject.
      // if (buildOptions.extractCss) {
      //   ret[pluginArgs] = extractTextPlugin;
      // }
      return ret;
    }));
  }
  if (buildOptions.extractCss) {
    // extract global css from js files into own css file
    extraPlugins.push(new MiniCssExtractPlugin({
      filename: `[name]${hashFormat.extract}.css`
    }));
    // suppress empty .js files in css only entry points
    extraPlugins.push(new webpack_1.SuppressExtractedTextChunksWebpackPlugin());
  }
  return {
    // Workaround stylus-loader defect: https://github.com/shama/stylus-loader/issues/189
    loader: {
      stylus: {}
    },
    entry: entryPoints,
    module: {
      rules
    },
    plugins: [].concat(extraPlugins)
  };
}
exports.getStylesConfig = getStylesConfig;