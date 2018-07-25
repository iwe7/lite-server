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

    constructor(
        private store: Store<any>,
        private modal: NzModalService
    ) {
        this.list = this.store.select(goodAllSelector);
        this.columns = this.store.select('pc', 'good', 'columns');
        this.schema = this.store.select('pc', 'good', 'schema');
        this.ui = this.store.select('pc', 'good', 'ui');
        this.shop = this.store.select('pc', 'shop', 'currentShop');
    }

    ngOnInit() { }
    @ViewChild('edit') edit: TemplateRef<any>;
    data: any;
    addGood() {
        const modal = this.modal.create({
            nzTitle: "添加商品",
            nzComponentParams: {},
            nzContent: this.edit,
            nzFooter: [
                {
                    label: "提交", type: "primary", onClick: () => {
                        this.store.dispatch({
                            type: "AddGood",
                            payload: this.data
                        });
                        modal.close();
                    }
                }
            ]
        });
    }

    formChange(e: any) {
        this.data = { ...this.data, ...e };
    }

    formError(e: any) {
        console.log(e);
    }
}
