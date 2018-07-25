import { AutocompleteService } from './../services/autocomplete.service';
import { GeocoderService } from './../services/geocoder.service';
import { GeolocationService } from './../services/geolocation.service';
import { filter, tap, switchMap, map } from 'rxjs/operators';
import { BmapService } from './../services/bmap.service';
import { OnInit, Directive, ElementRef, Output, EventEmitter, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, merge, fromEvent } from 'rxjs';
import { Store } from '@ngrx/store';

@Directive({
    selector: '[bmap]',
    exportAs: 'bmap'
})
export class BmapDirective implements OnInit, AfterViewInit, OnDestroy {
    map: BMap.Map;

    listener: Subscription;
    constructor(
        public ele: ElementRef,
        public bmap: BmapService,
        private store: Store<any>,
        private geolocation: GeolocationService
    ) { }

    ngOnInit() {
        this.listener = merge(
            this.store.select('bmap', 'loaded').pipe(
                filter(res => res),
                tap(res => {
                    this.map = new BMap.Map(this.ele.nativeElement);
                    this.bmap.setMap(this.map);
                })
            ),
            this.geolocation.getCurrentPosition()
        ).subscribe();
        this.bmap.load();
    }

    ngOnDestroy() {
        this.listener.unsubscribe();
        this.bmap.removeMap();
    }

    ngAfterViewInit() { }
}
