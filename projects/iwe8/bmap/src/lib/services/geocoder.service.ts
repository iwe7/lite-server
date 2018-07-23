import { BmapService } from './bmap.service';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { map, switchMap, filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';

@Injectable({
    providedIn: "root"
})
export class GeocoderService {
    geocoder: Observable<BMap.Geocoder>;
    constructor(
        private store: Store<any>
    ) {
        this.geocoder = this.store.select('bmap', 'loaded').pipe(
            filter(res => res),
            map(res => {
                return new BMap.Geocoder();
            })
        )
    }

    getLocation(point: BMap.Point): Observable<BMap.GeocoderResult> {
        return this.geocoder.pipe(
            switchMap(res => {
                return Observable.create((subscriber: Subscriber<BMap.GeocoderResult>) => {
                    res.getLocation(point, (res: BMap.GeocoderResult) => {
                        subscriber.next(res);
                        subscriber.complete();
                    });
                });
            })
        )
    }
}
