import { Pipe, PipeTransform, ɵisObservable, ɵisPromise } from '@angular/core';
import { Store } from '@ngrx/store';
import { of, Observable, from } from 'rxjs';

@Pipe({
    name: 'store'
})
export class StorePipe implements PipeTransform {
    constructor(private store: Store<any>) { }
    transform(value: any): Observable<any> {
        if (ɵisObservable(value)) {
            return value;
        }
        if (ɵisPromise(value)) {
            return from(value);
        }
        if (typeof value === 'string') {
            const paths = value.split('.');
            if (paths.length > 1) {
                return this.store.select(...paths);
            } else {
                return of(value);
            }
        } else {
            return of(value);
        }
    }
}
