import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { Iwe7Response } from './iwe7-util2';
@Injectable({
  providedIn: 'root'
})
export class Iwe7Util3Service {
  m: string = 'iwe7_worker';
  model: string = 'web';
  uniacid: string = '1';
  constructor(
    private http: HttpClient
  ) { }

  setM(m: string): void {
    this.m = m;
  }

  setUniacid(uniacid: string) {
    this.uniacid = uniacid;
  }

  setModel(model: 'web' | 'app' = 'web') {
    this.model = model;
  }

  get wupload() {
    let url = '.';
    if (isDevMode()) {
      url = 'http://test.meepo.com.cn/web';
    }
    return `${url}/index.php?c=utility&a=file&do=upload`;
  }

  get url() {
    if (this.model === 'web') {
      return this.wurl;
    } else if (this.model === 'app') {
      return this.murl;
    } else {
      return '';
    }
  }

  get wurl(): string {
    let url = '.';
    if (isDevMode()) {
      url = 'http://test.meepo.com.cn/web';
    }
    return `${url}/index.php?c=site&a=entry&do=api3&m=${this.m}`;
  }

  get murl(): string {
    let url = '.';
    if (isDevMode()) {
      url = 'http://test.meepo.com.cn/app';
    }
    return `${url}/index.php?c=entry&a=site&i=${this.uniacid}&do=api3&m=${this.m}`;
  }

  wget<T>(params: any): Observable<Iwe7Response<T>> {
    return this.http.get<Iwe7Response<T>>(this.url, { withCredentials: true, params: params });
  }

  wpost<T>(body: any, params: any = {}): Observable<Iwe7Response<T>> {
    return this.http.post<Iwe7Response<T>>(this.url, body, { withCredentials: true, params: params });
  }

}
