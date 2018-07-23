import { LocalSearchService } from '../services/index';
import { switchMap, tap, filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

@Injectable()
export class BmapEffectService {
    map: Observable<BMap.Map>;
    currentPostion: Observable<BMap.GeolocationResult>;
    options: Observable<{ zoom: number }>;

    @Effect()
    SetSearchKeys = this.actions.ofType('BMapLocalSearch').pipe(
        switchMap((res: any) => {
            console.log(res);
            return this.localSearch.search(res.payload)
        }),
        map(res => ({
            type: "BMapEmpty",
            payload: {}
        }))
    );

    constructor(
        private store: Store<any>,
        private actions: Actions,
        private localSearch: LocalSearchService
    ) {
        this.map = this.store.select('bmap', 'map');
        this.currentPostion = this.store.select('bmap', 'currentPosition');
        this.options = this.store.select('bmap', 'options');
    }
}
