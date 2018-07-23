import { AutocompleteService } from './../services/autocomplete.service';
import { GeocoderService } from './../services/geocoder.service';
import { GeolocationService } from './../services/geolocation.service';
import { filter, tap, switchMap, map } from 'rxjs/operators';
import { BmapService } from './../services/bmap.service';
import { OnInit, Directive, ElementRef, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { Subscription, Observable, merge } from 'rxjs';
import { Store } from '@ngrx/store';

@Directive({
    selector: '[bmap]',
    exportAs: 'bmap'
})
export class BmapDirective implements OnInit, AfterViewInit {
    map: BMap.Map;
    listener: Subscription;
    @Output() locationSuccess: EventEmitter<any> = new EventEmitter();
    @Input() autoEle: ElementRef;
    constructor(
        public ele: ElementRef,
        public bmap: BmapService,
        private store: Store<any>,
        private geolocation: GeolocationService
    ) {
        this.store.select('bmap', 'loaded').pipe(
            filter(res => res)
        ).subscribe(res => {
            this.map = new BMap.Map(this.ele.nativeElement);
            this.store.dispatch({
                type: "SetMap",
                payload: this.map
            });
        });
        this.geolocation.getCurrentPosition().subscribe();
    }

    ngOnInit() {
        this.bmap.load();
    }

    ngAfterViewInit() { }
}
