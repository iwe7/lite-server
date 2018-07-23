import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
    selector: 'shop-root',
    templateUrl: './shop-root.html',
    styleUrls: ['./shop-root.scss']
})

export class ShopRootComponent implements OnInit {
    shop: Observable<any>;
    constructor(
        private route: ActivatedRoute,
        private store: Store<any>
    ) {
        this.route.params.subscribe(res => {
            if (res.id) {
                this.store.dispatch({
                    type: "SetCurrentShopById",
                    payload: res.id
                });
                this.shop = this.store.select('pc', 'shop', 'currentShop');
            }
        });
    }

    ngOnInit() { }

    _click(nav: any) {
        this.store.dispatch(nav.action);
    }
}
