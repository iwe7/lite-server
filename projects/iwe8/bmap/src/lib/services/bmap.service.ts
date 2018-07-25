import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Iwe7ScriptService } from 'iwe7-script';
import { fromEvent } from 'rxjs';
@Injectable({
    providedIn: "root"
})
export class BmapService {
    map: BMap.Map;
    constructor(
        private loader: Iwe7ScriptService,
        private store: Store<any>
    ) {

    }

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

    setMap(map: BMap.Map) {
        this.map = map;
        this.store.dispatch({
            type: "SetMap",
            payload: this.map
        });
        this.bindClick();
        this.bindMoveend();
        this.bindMoving();
        this.bindDragend();
    }

    private bindClick() {
        fromEvent(this.map as EventTarget, 'click').subscribe(res => {
            this.store.dispatch({
                type: "BMapClick",
                payload: res
            });
        });
    }

    private bindMoveend() {
        fromEvent(this.map as EventTarget, 'moveend').subscribe(res => {
            this.store.dispatch({
                type: "BMapMoveend",
                payload: res
            });
        });
    }

    private bindMoving() {
        fromEvent(this.map as EventTarget, 'moving').subscribe(res => {
            this.store.dispatch({
                type: "BMapMoving",
                payload: res
            });
        });
    }

    private bindDragend() {
        fromEvent(this.map as EventTarget, 'dragend').subscribe(res => {
            this.store.dispatch({
                type: "BMapDragend",
                payload: res
            });
        });
    }

    removeMap() {
        this.store.dispatch({
            type: "RemoveMap",
            payload: this.map
        });
    }
}
