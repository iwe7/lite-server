import { PlatformLocation, LocationStrategy, Location, LocationChangeListener } from "@angular/common";
import { InjectionToken, Optional, Inject, Injectable, Injector } from "@angular/core";
export function DefaultIwe7LocationStrategyConfig() {
  return '/do';
}

export const Iwe8LocationStrategyConfig = new InjectionToken<string>('Iwe7LocationStrategyConfig', {
  providedIn: 'root',
  factory: DefaultIwe7LocationStrategyConfig
});

@Injectable({
  providedIn: 'root'
})
export class Iwe8LocationStrategy extends LocationStrategy {
  queryParams: { [key: string]: any };
  constructor(
    private _platformLocation: PlatformLocation,
    public injector: Injector,
    @Optional() @Inject(Iwe8LocationStrategyConfig) private config?: string
  ) {
    super();
  }
  path(includeHash?: boolean): string {
    this.queryParams = this.parseUrl(this._platformLocation.search);
    this.config = this.injector.get(Iwe8LocationStrategyConfig);
    const configs = this.config.split('/');
    const path = this.queryStringToPath(configs);
    const hash = this._platformLocation.hash;
    return hash && includeHash ? `${path}${hash}` : path;
  }
  private queryStringToPath(configs: string[]) {
    const res: string[] = configs.map(name => {
      if (this.queryParams[name]) {
        return this.queryParams[name];
      }
    });
    return res.join('/');
  }
  private parseUrl(url: string) {
    const result = {};
    const query = url.split("?")[1];
    const queryArr = query.split("&");
    queryArr.forEach(function (item) {
      const obj = {};
      const value = item.split("=")[0];
      const key = item.split("=")[1];
      result[value] = key ? key : '';
    });
    return result;
  }
  private pathToQueryString() {
    const url = [];
    for (const key in this.queryParams) {
      if (key !== '') {
        url.push(`${key}=${this.queryParams[key] ? this.queryParams[key] : ''}`);
      }
    }
    const res = url.join('&');
    return Location.normalizeQueryParams(res);
  }
  prepareExternalUrl(internal: string) {
    return '';
  }
  prepareExternalUrl2(internal: string, queryParams: string): string {
    const internals = internal.split('/');
    this.config = this.injector.get(Iwe8LocationStrategyConfig);
    const configs = this.config.split('/');
    const urls = {};
    configs.map((config: string, index: number) => {
      this.queryParams[config] = internals[index];
    });
    return this.pathToQueryString();
  }
  pushState(state: any, title: string, url: string, queryParams: string): void {
    const externalUrl = this.prepareExternalUrl2(url, queryParams);
    this._platformLocation.pushState(state, title, externalUrl);
  }
  replaceState(state: any, title: string, url: string, queryParams: string): void {
    const externalUrl = this.prepareExternalUrl2(url, queryParams);
    this._platformLocation.replaceState(state, title, externalUrl);
  }
  forward(): void {
    this._platformLocation.forward();
  }
  back(): void {
    this._platformLocation.back();
  }
  onPopState(fn: LocationChangeListener): void {
    this._platformLocation.onPopState(fn);
    this._platformLocation.onHashChange(fn);
  }
  getBaseHref(): string {
    return '';
  }
}
