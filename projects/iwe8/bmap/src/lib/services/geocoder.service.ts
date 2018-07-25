import { BmapService } from './bmap.service';
import { Injectable, NgZone } from '@angular/core';
import { Observable, Subscriber, of } from 'rxjs';
import { switchMap, filter, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

@Injectable({
    providedIn: "root"
})
export class GeocoderService {
    geocoder: Observable<BMap.Geocoder>;
    constructor(
        private store: Store<any>,
        private zone: NgZone
    ) {
        this.geocoder = this.store.select('bmap', 'loaded').pipe(
            filter(res => res),
            switchMap((res: boolean) => {
                return of(new BMap.Geocoder());
            })
        );

        const map = this.store.select('bmap', 'map');

        this.store.select('bmap', 'moveend').pipe(
            switchMap(moveend => map.pipe(
                filter(res => !!res),
                switchMap(map => {
                    const point = map.getCenter();
                    return this.getLocation(point);
                }),
                tap(res => {
                    this.store.dispatch({
                        type: "BMapSetGeocoderResult",
                        payload: res
                    });
                })
            ))
        ).subscribe();
    }

    getLocation(point: BMap.Point): Observable<BMap.GeocoderResult> {
        return this.geocoder.pipe(
            switchMap(res => {
                return Observable.create((subscriber: Subscriber<BMap.GeocoderResult>) => {
                    this.zone.runOutsideAngular(() => {
                        res.getLocation(point, (res: BMap.GeocoderResult) => {
                            subscriber.next(res);
                            subscriber.complete();
                        });
                    });
                });
            })
        )
    }
}
