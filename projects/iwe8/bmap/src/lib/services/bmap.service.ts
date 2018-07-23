import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Iwe7ScriptService } from 'iwe7-script';
@Injectable({
    providedIn: "root"
})
export class BmapService {

    constructor(
        private loader: Iwe7ScriptService,
        private store: Store<any>
    ) { }

    load(): void {
        const init = () => {
            this.store.dispatch({
                type: "BMapLoaded"
            });
        };
        (<any>window).init = (<any>window).init || init;
        this.loader.load(['https://api.map.baidu.com/api?v=2.0&ak=Xo6mSiXtItekVGBfNLsedOR1ncASB4pV&type=.js&callback=init'])
            .subscribe();
    }
}
