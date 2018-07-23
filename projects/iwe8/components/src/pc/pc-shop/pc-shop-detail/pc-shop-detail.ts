import { CascaderOption } from 'ng-zorro-antd';
import { map, tap, switchMap, filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { SFSchema, SFUISchema, CascaderWidget } from '@delon/form';
import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pc-shop-detail',
    templateUrl: 'pc-shop-detail.html',
    styleUrls: ['./pc-shop-detail.scss']
})
export class PcShopDetailComponent implements OnInit {
    schema: Observable<SFSchema>;
    ui: Observable<SFUISchema>;
    constructor(
        public store: Store<any>
    ) {
        this.schema = this.store.select('pc', 'shop', 'schema').pipe(
            map(res => {
                const store = new Iwe8SchemaStore(res, this.store);
                return store.getSchma();
            }),
        );
        this.ui = this.store.select('pc', 'shop', 'ui');
    }
    ngOnInit() { }


    formChange(e: any) {
        console.log(e);
    }

}


export class Iwe8SchemaStore {
    children: { [key: string]: Iwe8SchemaStore } = {};
    constructor(public schema: SFSchema, private store: Store<any>, public parent?: Iwe8SchemaStore) {
        for (let key in schema) {
            if (key === 'properties') {
                const proper = schema['properties'];
                for (let j in proper) {
                    this.children[j] = new Iwe8SchemaStore(proper[j], store, this);
                }
            }
            if (key === 'ui') {
                const ui: any = schema['ui'];
                for (let j in ui) {
                    if (j === 'asyncData') {
                        const k: string = ui[j];
                        const p = () => this.store.select(...k.split('.')).pipe(
                            map(res => res.children)
                        );
                        ui[j] = p;
                    }
                }
            }
        }


    }

    getSchma() {
        const children = {};
        for (const index in this.children) {
            children[index] = this.children[index].getSchma();
        }
        this.schema.properties = children;
        return this.schema;
    }
}
