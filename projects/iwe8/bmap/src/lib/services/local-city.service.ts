import { filter, map, tap, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LocalCityService {
    localCity: Observable<BMap.LocalCity>;
    constructor(
        private store: Store<any>
    ) {
        this.localCity = this.store.select('bmap', 'map').pipe(
            filter(res => !!res),
            map(map => new BMap.LocalCity({
                renderOptions: {
                    map: map
                }
            }))
        );
    }
    get(): Observable<BMap.LocalCityResult> {
        return this.localCity.pipe(
            switchMap(localCity => {
                return Observable.create(obser => {
                    localCity.get((res: BMap.LocalCityResult) => {
                        this.store.dispatch({
                            type: "SetLocalCity",
                            payload: res
                        });
                        obser.next(res);
                        obser.complete();
                    });
                });
            })
        );
    }
}
