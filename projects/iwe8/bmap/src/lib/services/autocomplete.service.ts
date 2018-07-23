import { Store } from '@ngrx/store';
import { Observable, Subscriber } from 'rxjs';
import { BmapService } from './bmap.service';
import { Injectable, ElementRef } from '@angular/core';
import { map, tap, switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})
export class AutocompleteService {
    autocomplete: Observable<BMap.Autocomplete>;
    constructor(
        private store: Store<any>
    ) {

    }

}
