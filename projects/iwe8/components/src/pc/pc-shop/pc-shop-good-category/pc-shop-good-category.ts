import { Iwe7Util2Service } from 'iwe7-util2';
import { SFSchema, SFUISchema } from '@delon/form';
import { Observable } from 'rxjs';
import { goodCategoryAllSelector } from '@iwe8/store-pc';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { SimpleTableColumn } from '@delon/abc';
import { NzModalService } from 'ng-zorro-antd';
@Component({
    selector: 'pc-shop-good-category',
    templateUrl: 'pc-shop-good-category.html',
    styleUrls: ['./pc-shop-good-category.scss']
})

export class PcShopGoodCategoryComponent implements OnInit {
    list: Observable<any[]>;
    columns: Observable<SimpleTableColumn[]>;
    shop: Observable<any>;
    schema: Observable<SFSchema>;
    ui: Observable<SFUISchema>;

    constructor(
        private store: Store<any>,
        private modal: NzModalService,
        private util: Iwe7Util2Service
    ) {
        this.list = this.store.select(goodCategoryAllSelector);
        this.columns = this.store.select('pc', 'goodCategory', 'columns');
        this.schema = this.store.select('pc', 'goodCategory', 'schema');
        this.ui = this.store.select('pc', 'goodCategory', 'ui');

        this.shop = this.store.select('pc', 'shop', 'currentShop');
    }

    ngOnInit() {

    }
    @ViewChild('edit') edit: TemplateRef<any>;
    data: any;

    private _modal: any;
    addCategory() {
        this._modal = this.modal.create({
            nzTitle: "添加商品分类",
            nzComponentParams: {},
            nzContent: this.edit,
            nzFooter: null
        });
    }

    formSubmit(e: any) {
        this.data = { ...this.data, ...e };
        this.store.dispatch({
            type: "AddGoodCategory",
            payload: this.data
        });
        if (this._modal) {
            this._modal.close();
            this._modal = null;
        }
    }
}
