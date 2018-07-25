var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var path = require('path');
var gulp = require("gulp");
var autoprefix = new LessAutoprefix({
    browsers: ['last 2 versions']
});

gulp.task('default', function () {
    return gulp.src('./projects/iwe7-airunyan-pc/src/iwe8-pc.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')],
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest('./public/css'));
});
