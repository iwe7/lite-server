import { shopAllSelector } from '@iwe8/store-pc';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'pc-shop-list',
    templateUrl: 'pc-shop-list.html',
    styleUrls: ['./pc-shop-list.scss']
})
export class PcShopListComponent implements OnInit {
    list: Observable<any[]>;
    constructor(
        private store: Store<any>
    ) {
        this.list = this.store.select(shopAllSelector);
    }

    ngOnInit() { }

    _click(item: any) {
        this.store.dispatch(item.action);
    }
}
