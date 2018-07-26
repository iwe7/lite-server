import { Store } from '@ngrx/store';
import { map, switchMap, tap, filter } from 'rxjs/operators';
import { merge, Observable, of } from 'rxjs';

import { ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { WidgetService } from '../widget.service';
export class SchemaParse {
    // 值
    private _value: any = {};
    // children
    private children: { [key: string]: SchemaParse } = {};

    constructor(
        private name: string,
        private schema: any,
        private _widget: WidgetService,
        private store: Store<any>,
        private parent?: SchemaParse,
    ) {
        if (schema && this.length > 0) {
            this.schema.selector = this.schema.selector || this.schema.type;
            if (this.schema.properties) {
                for (let key in schema.properties) {
                    this.children[key] = new SchemaParse(key, schema.properties[key], _widget, store, this);
                }
            }
        }
    }
    get length() {
        let count = 0;
        for (let key in this.schema.properties) {
            count++;
        }
        return count;
    }
    // 渲染到viewContainerRef
    render(view: ViewContainerRef, resolver: ComponentFactoryResolver): Observable<any> {
        return this._widget.load(this.schema.selector).pipe(
            filter(res => !!res),
            map(res => resolver.resolveComponentFactory(res)),
            map(res => view.createComponent(res)),
            map(res => res.instance),
            tap((res: any) => res.value$ = this.store.select(this.path)),
            tap((res: any) => res.path = this.path),
            tap((res: any) => res.name = this.name),
            // 渲染子代
            switchMap((instance: any) => {
                if (this.length > 0) {
                    return instance.pipe(
                        filter(res => !!res),
                        switchMap((view: ViewContainerRef) => {
                            const obs = [];
                            for (let key in this.children) {
                                const child = this.children[key].render(view, resolver);
                                console.log(child);
                                obs.push(child)
                            }
                            console.log(obs);
                            return merge(...obs).pipe(tap(res => console.log(res)));
                        })
                    )
                } else {
                    return of(instance);
                }
            })
        );
    }
    // 路径
    get path() {
        if (this.parent) {
            return this.parent.path + '.' + this.name;
        } else {
            return this.name;
        }
    }
    // 值
    get value() {
        if (this.children) {
            for (let key in this.children) {
                this._value[key] = this.children[key].value;
            }
            return this._value;
        } else {
            return this._value
        }
    }
}
