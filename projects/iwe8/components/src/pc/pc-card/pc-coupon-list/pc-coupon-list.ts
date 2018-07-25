import { couponAllSelector } from '@iwe8/store-pc';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'pc-coupon-list',
    templateUrl: 'pc-coupon-list.html',
    styleUrls: ['./pc-coupon-list.scss']
})
export class PcCouponListComponent implements OnInit {
    list: any;
    constructor(
        private store: Store<any>
    ) {
        this.list = this.store.select(couponAllSelector);
        this.list.subscribe(res => console.log(res));
    }

    ngOnInit() { }
}
