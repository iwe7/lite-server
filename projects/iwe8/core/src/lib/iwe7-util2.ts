import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
export interface Iwe7Response<T> {
    code: number;
    msg: string;
    data: T;
}
@Injectable({
    providedIn: 'root'
})
export class Iwe7Util2Service {
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

    url(m: string, mdo: string) {
        if (this.model === 'web') {
            return this.wurl(m, mdo);
        } else if (this.model === 'app') {
            return this.murl(m, mdo);
        } else {
            return '';
        }
    }

    wurl(m: string, mdo: string): string {
        let url = '.';
        if (isDevMode()) {
            url = 'http://test.meepo.com.cn/web';
        }
        return `${url}/index.php?c=site&a=entry&do=api&m=${this.m}&model=${m}&mdo=${mdo}`;
    }

    murl(m: string, mdo: string): string {
        let url = '.';
        if (isDevMode()) {
            url = 'http://test.meepo.com.cn/app';
        }
        return `${url}/index.php?c=entry&a=site&i=${this.uniacid}&do=api&m=${this.m}&model=${m}&mdo=${mdo}`;
    }

    wget<T>(m: string, mdo: string, params: any): Observable<Iwe7Response<T>> {
        const url = this.url(m, mdo);
        return this.http.get<Iwe7Response<T>>(url, { withCredentials: true, params: params });
    }

    wpost<T>(m: string, mdo: string, body: any, params: any = {}): Observable<Iwe7Response<T>> {
        const url = this.url(m, mdo);
        return this.http.post<Iwe7Response<T>>(url, body, { withCredentials: true, params: params });
    }

}
