import { map, filter, tap, debounceTime } from 'rxjs/operators';
import { Observable, merge, fromEvent, Subscription } from 'rxjs';
import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AutocompleteDataSource } from 'ng-zorro-antd';

export interface PcAddressResult {
    streetNumber: string,
    street: string,
    district: string,
    city: string,
    province: string,
    point: BMap.Point,
    address: string;
}
@Component({
    selector: 'pc-address-entry',
    templateUrl: 'pc-address-entry.html',
    styleUrls: ['./pc-address-entry.scss']
})
export class PcAddressEntryComponent implements OnInit, OnDestroy {
    localSearchResult: Observable<BMap.LocalResult>;
    filteredOptions: Observable<AutocompleteDataSource>;
    @ViewChild('keyword') keyword: ElementRef;
    autocompleteDataSource: any[] = [];

    listener: Subscription;
    constructor(
        private store: Store<any>,
        private cd: ChangeDetectorRef
    ) {

    }
    ngOnInit() { }

    ngOnDestroy() {
        try {
            this.listener.unsubscribe();
        } catch (err) { }
    }

    value: any;
    change(e: any) {
        const point = e.point;
        this.store.dispatch({
            type: 'BMapSetPoint',
            payload: point
        });
    }

    ngAfterViewInit() {
        const input = fromEvent(this.keyword.nativeElement, 'input');
        const keydown = fromEvent(this.keyword.nativeElement, 'keydown');
        const keyup = fromEvent(this.keyword.nativeElement, 'keyup');
        // 中文输入
        this.localSearchResult = this.store.select('bmap', 'localSearchResult');
        const geocoderResult = this.store.select('bmap', 'geocoderResult');

        this.listener = merge(
            this.localSearchResult.pipe(
                filter(res => !!res),
                map(res => {
                    this.autocompleteDataSource = [];
                    for (let key = 0; key < res.getCurrentNumPois(); key++) {
                        const item: BMap.LocalResultPoi = res.getPoi(key);
                        this.autocompleteDataSource.push(item)
                    }
                }),
                tap(res => this.cd.detectChanges())
            ),
            geocoderResult.pipe(
                filter(res => !!res),
                tap(res => {
                    const surroundingPois = res.surroundingPois;
                    this.autocompleteDataSource = surroundingPois;
                    this.cd.detectChanges()
                })
            ),
            merge(input, keydown, keyup).pipe(
                debounceTime(300),
                map(res => (res as any).target.value),
                tap(value => {
                    this.store.dispatch({
                        type: "BMapLocalSearch",
                        payload: value
                    });
                })
            )
        ).subscribe();
    }
}
