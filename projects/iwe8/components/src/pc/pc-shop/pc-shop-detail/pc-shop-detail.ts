import { map, filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { SFSchema, SFUISchema } from '@delon/form';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Iwe8SchemaStore } from '@iwe8/core';
import { Iwe7Util2Service } from 'iwe7-util2';
@Component({
    selector: 'pc-shop-detail',
    templateUrl: 'pc-shop-detail.html',
    styleUrls: ['./pc-shop-detail.scss']
})
export class PcShopDetailComponent implements OnInit {
    schema: Observable<SFSchema>;
    ui: Observable<SFUISchema>;
    default: Observable<any>;
    constructor(
        public store: Store<any>,
        public util: Iwe7Util2Service,
    ) {
        this.schema = this.store.select('pc', 'shop', 'schema').pipe(
            filter(res => !!res),
            map(res => {
                const store = new Iwe8SchemaStore(res, this.store, this.util);
                return store.getSchma();
            }),
        );
        this.ui = this.store.select('pc', 'shop', 'ui').pipe(
            filter(res => !!res)
        );
        this.default = this.store.select('pc', 'shop', 'currentShop').pipe(
            filter(res => !!res)
        );
    }
    ngOnInit() { }
    formSubmit(e: any) {
        this.store.dispatch({
            type: "UpdateShop",
            payload: e
        });
    }
}
