import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, switchMap, tap, filter } from 'rxjs/operators';
import { Iwe7Util2Service } from 'iwe7-util2';
import { shopAllSelector } from '@iwe8/store-pc';

@Component({
    selector: 'shop-root',
    templateUrl: './shop-root.html',
    styleUrls: ['./shop-root.scss']
})

export class ShopRootComponent implements OnInit {
    shop: Observable<any>;
    constructor(
        private route: ActivatedRoute,
        private store: Store<any>,
        private util: Iwe7Util2Service
    ) {
        this.route.params.subscribe(res => {
            if (res.id) {
                const shopId = res.id;
                this.store.select('pc', 'shop', 'entities').pipe(
                    tap(entities => {
                        if (entities[shopId]) {
                            this.store.dispatch({
                                type: "SetCurrentShopById",
                                payload: shopId
                            });
                        }
                    })
                ).subscribe();
                this.shop = this.store.select('pc', 'shop', 'currentShop').pipe(
                    filter(res => !!res)
                );
            }
        });
    }

    getShopById(shopId: string) {
        return this.util.wpost('iwe7Shop', 'get', { id: shopId }, {})
    }

    ngOnInit() { }

    _click(nav: any) {
        this.store.dispatch(nav.action);
    }
}
