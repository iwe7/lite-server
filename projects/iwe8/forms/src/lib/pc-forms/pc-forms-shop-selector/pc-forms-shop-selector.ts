import { Observable } from 'rxjs';
import { shopAllSelector } from '@iwe8/store-pc';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import { ControlWidget } from '@delon/form';
@Component({
    selector: 'pc-forms-shop-selector',
    templateUrl: 'pc-forms-shop-selector.html',
    styleUrls: ['./pc-forms-shop-selector.scss']
})
export class PcFormsShopSelectorComponent extends ControlWidget implements OnInit, OnDestroy {
    static KEY: string = 'shopSelector';

    shops: Observable<any[]>;
    listener: any;
    sid: string;
    constructor(cd: ChangeDetectorRef, private store: Store<any>, private zone: NgZone) {
        super(cd);
        this.shops = this.store.select(shopAllSelector);
    }
    ngOnInit() {
        this.listener = this.store.select('pc', 'shop', 'currentShop').subscribe(res => {
            this.zone.run(() => {
                this.sid = res.sid;
                this.change();
            });
        });
    }

    ngOnDestroy() {
        this.listener.unsubscribe();
    }

    change() {
        if (this.ui.change) {
            this.ui.change(this.sid);
        }
        this.setValue(this.sid);
    }
}
