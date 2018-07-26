import { ControlWidget } from '@delon/form';
import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { goodCategoryAllSelector } from '@iwe8/store-pc';
import { map } from 'rxjs/operators';

@Component({
    selector: 'pc-forms-shop-category',
    templateUrl: 'pc-forms-shop-category.html',
    styleUrls: ['./pc-forms-shop-category.scss']
})
export class PcFormsShopCategoryComponent extends ControlWidget implements OnInit {
    static KEY: string = 'shopCategorySelector';
    categorys: Observable<any[]>;
    cid: string;
    listener: any;
    constructor(
        private store: Store<any>,
        private zone: NgZone,
        cd: ChangeDetectorRef
    ) {
        super(cd);
        this.categorys = this.store.select(goodCategoryAllSelector);
    }
    ngOnInit() {
        this.cid = this.value;
    }

    change() {
        this.zone.run(() => {
            if (this.ui.change) {
                this.ui.change(this.cid);
            }
            this.setValue(this.cid);
            this.detectChanges();
        });
    }
}
