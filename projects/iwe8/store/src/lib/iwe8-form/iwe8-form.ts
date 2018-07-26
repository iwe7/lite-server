import { SchemaParse } from './schema-parse';
import { switchMap, filter } from 'rxjs/operators';
import { WidgetService } from './../widget.service';
import { Component, Input, ViewContainerRef, ComponentFactoryResolver, ViewChild, AfterViewInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
    selector: '[iwe8Form],iwe8-form',
    templateUrl: './iwe8-form.html'
})
export class Iwe8FormDirective {
    @Input() iwe8Form: string = 'form';
    @ViewChild('view', { read: ViewContainerRef }) view: ViewContainerRef;
    form: Observable<{
        form: {
            [key: string]: any,
        }
        ui: {
            [key: string]: any
        },
        schema: {
            [key: string]: any
        }
    }>;
    constructor(
        private store: Store<any>,
        private _widget: WidgetService,
        private _resover: ComponentFactoryResolver,
    ) {
        this.form = this.store.select('form');
    }

    ngAfterViewInit() {
        this.form.pipe(
            switchMap((form) => {
                this.view.clear();
                const schemaParse = new SchemaParse('form.form', form.schema, this._widget, this.store);
                console.log(schemaParse);
                const render = schemaParse.render(this.view, this._resover);
                console.log(render);
                return render;
            })
        ).subscribe(res => console.log(res));
    }
}
