import { map, filter, tap, debounceTime } from 'rxjs/operators';
import { Observable, merge, fromEvent } from 'rxjs';
import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
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
export class PcAddressEntryComponent implements OnInit {
    nzOptions: any;
    values: any;
    address: string;

    localSearchResult: Observable<BMap.LocalResult>;
    filteredOptions: Observable<AutocompleteDataSource>;

    @ViewChild('keyword') keyword: ElementRef;
    constructor(private store: Store<any>, private cd: ChangeDetectorRef) {
        this.localSearchResult = this.store.select('bmap', 'localSearchResult');
        this.filteredOptions = this.localSearchResult.pipe(
            filter(res => !!res),
            map(res => {
                const autocompleteDataSource: any[] = [];
                for (let key = 0; key < res.getCurrentNumPois(); key++) {
                    const item: BMap.LocalResultPoi = res.getPoi(key);
                    autocompleteDataSource.push(item)
                }
                return autocompleteDataSource;
            }),
            tap(res => this.cd.detectChanges())
        );

    }
    ngOnInit() { }

    ngAfterViewInit() {
        const input = fromEvent(this.keyword.nativeElement, 'input');
        const keydown = fromEvent(this.keyword.nativeElement, 'keydown');
        // 中文输入
        merge(input, keydown).pipe(
            debounceTime(300),
            map(res => (res as any).target.value)
        ).subscribe((value: string) => {
            this.store.dispatch({
                type: "BMapLocalSearch",
                payload: value
            });
        });
    }
}
