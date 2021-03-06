import { Store } from '@ngrx/store';
import { map, filter, switchMap, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { BmapService } from './bmap.service';
import { Injectable, NgZone } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class LocalSearchService {
    localSearch: Observable<BMap.LocalSearch>;
    onSearchComplete: Subject<any> = new Subject();
    constructor(
        private store: Store<any>,
        private zone: NgZone
    ) {
        this.localSearch = this.store.select('bmap', 'map').pipe(
            filter(res => !!res),
            map(map => {
                return new BMap.LocalSearch(map, {
                    onSearchComplete: (res: BMap.LocalResult) => {
                        this.store.dispatch({
                            type: "BMapLocalSearchSuccess",
                            payload: res
                        });
                    }
                });
            })
        );
    }

    search(key: string) {
        return this.localSearch.pipe(
            tap(res => {
                this.zone.runOutsideAngular(()=>{
                    res.search(key);
                });
            }),
            switchMap(res => {
                return this.store.select('bmap', 'localSearchResult');
            })
        );
    }
}
