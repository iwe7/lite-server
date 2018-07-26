import { Iwe7Util2Service } from 'iwe7-util2';
import { SFSchema, SFUISchema } from '@delon/form';
import { Observable } from 'rxjs';
import { goodAllSelector } from '@iwe8/store-pc';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { SimpleTableColumn } from '@delon/abc';
import { NzModalService } from 'ng-zorro-antd';
@Component({
    selector: 'pc-shop-good',
    templateUrl: 'pc-shop-good.html',
    styleUrls: ['./pc-shop-good.scss']
})

export class PcShopGoodComponent implements OnInit {
    list: Observable<any[]>;
    columns: Observable<SimpleTableColumn[]>;
    shop: Observable<any>;
    schema: Observable<SFSchema>;
    ui: Observable<SFUISchema>;

    sid: string;
    constructor(
        private store: Store<any>,
        private modal: NzModalService,
        private util: Iwe7Util2Service
    ) {
        this.list = this.store.select(goodAllSelector);
        this.columns = this.store.select('pc', 'good', 'columns');
        this.schema = this.store.select('pc', 'good', 'schema');
        this.ui = this.store.select('pc', 'good', 'ui');
        this.shop = this.store.select('pc', 'shop', 'currentShop');
        this.shop.subscribe(res => {
            this.sid = res.sid;
        })
    }

    ngOnInit() {
        this.util.wpost('iwe7ShopGood', 'loads', {}).subscribe((res: any) => {
            this.store.dispatch({
                type: "InitShopGood",
                payload: res.data.list
            });
        });
    }
    @ViewChild('edit') edit: TemplateRef<any>;
    data: any;

    private _modal: any;
    addGood() {
        this._modal = this.modal.create({
            nzTitle: "添加商品",
            nzComponentParams: {},
            nzContent: this.edit,
            nzFooter: null
        });
    }

    formSubmit(e: any) {
        this.data = { ...this.data, ...e, sid: this.sid };
        console.log(this.data);
        this.store.dispatch({
            type: "AddGood",
            payload: this.data
        });
        if (this._modal) {
            this._modal.close();
        }
    }

    formChange(e: any) {
        console.log(e);
    }
}
