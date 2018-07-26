import { Observable } from 'rxjs';
import { shopAllSelector } from '@iwe8/store-pc';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy, ChangeDetectorRef, NgZone, AfterViewInit } from '@angular/core';
import { ControlWidget } from '@delon/form';
import { tap, filter, map } from 'rxjs/operators';
@Component({
    selector: 'pc-forms-shop-selector',
    templateUrl: 'pc-forms-shop-selector.html',
    styleUrls: ['./pc-forms-shop-selector.scss']
})
export class PcFormsShopSelectorComponent extends ControlWidget implements OnInit, OnDestroy, AfterViewInit {
    static KEY: string = 'shopSelector';

    shops: Observable<any[]>;
    listener: any;
    sid: string;
    constructor(cd: ChangeDetectorRef, private store: Store<any>, private zone: NgZone) {
        super(cd);
        this.shops = this.store.select(shopAllSelector);
    }
    ngOnInit() {
        if (!this.value) {
            this.listener = this.store.select('pc', 'shop', 'currentShop').pipe(
                map(res=>{
                    return this.value ? this.value : res.sid
                })
            );
        }
    }

    ngOnDestroy() {

    }

    ngAfterViewInit() {

    }

    change() {
        this.zone.run(()=>{
            if (this.ui.change) {
                this.ui.change(this.sid);
            }
            this.setValue(this.sid);
            this.detectChanges();
        });
    }
}
