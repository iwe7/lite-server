import { Store } from '@ngrx/store';
import { map, switchMap, tap, filter } from 'rxjs/operators';
import { BmapService } from './bmap.service';
import { Observable, Subscriber } from 'rxjs';
import { Injectable, NgZone } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class GeolocationService {
    geolocation: Observable<BMap.Geolocation>;
    constructor(
        public store: Store<any>,
        private zone: NgZone
    ) {
        this.geolocation = this.store.select('bmap', 'loaded').pipe(
            filter(res => res),
            map(res => {
                return new BMap.Geolocation();
            })
        );
    }
    // 获取当前位置
    getCurrentPosition(): Observable<any> {
        return this.geolocation.pipe(
            switchMap((res: BMap.Geolocation) => {
                this.zone.runOutsideAngular(() => {
                    res.getCurrentPosition(result => {
                        this.store.dispatch({
                            type: "SetCurrentPosition",
                            payload: result
                        });
                    }, {});
                });
                return this.store.select('bmap', 'currentPosition');
            })
        )
    }
}
