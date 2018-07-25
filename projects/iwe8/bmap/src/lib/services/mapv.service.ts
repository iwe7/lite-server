import { Store } from '@ngrx/store';
import { Iwe7ScriptService } from 'iwe7-script';
import { Injectable } from '@angular/core';

@Injectable()
export class MapvService {

    constructor(
        private loader: Iwe7ScriptService,
        private store: Store<any>
    ) { }

    load() {
        const src = "http://mapv.baidu.com/build/mapv.min.js";
        this.loader.load([src]).subscribe(res => {
            if (res) {
                this.store.dispatch({
                    type: "BMapLoadMapv"
                });
            }
        });
    }
}
