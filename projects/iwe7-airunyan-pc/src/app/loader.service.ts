import { Iwe7Util3Service } from 'iwe7-util3';
import { Iwe7Util2Service } from 'iwe7-util2';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, from } from 'rxjs';
import { tap, map, switchMap, takeLast } from 'rxjs/operators';
import { SFSchemaEnumType, SFSchemaEnum } from '@delon/form';

@Injectable({
    providedIn: "root"
})
export class LoaderService {

    constructor(
        private util: Iwe7Util3Service,
        private util2: Iwe7Util2Service,
        private store: Store<any>
    ) {
        this.util.setM('iwe7_design');
        this.util.setModel('app');
        this.util2.setM('iwe7_design');
    }

    init() {
        this.loadShopCategory();
        this.getCouponListAction();
        this.initShop();
        this.loadShopGoodCategory();
    }

    private initShop() {
        this.util2.wpost('iwe7Shop', 'Loads', {}, {}).pipe(
            tap((res: any) => {
                this.store.dispatch({
                    type: "InitShop",
                    payload: res.data
                })
            })
        ).subscribe();
    }

    private getCouponListAction() {
        this.util.wpost({
            type: "GetCouponListAction"
        }).subscribe((res: any) => {
            this.store.dispatch({
                type: "InitCouponAction",
                payload: res.data.list
            });
        });
    }

    private loadShopCategory() {
        this.getShopCategoryAction().subscribe(res => {
            this.store.dispatch({
                type: "InitShopCateogry",
                payload: res
            });
        });
    }

    private loadShopGoodCategory() {
        this.util2.wpost('iwe7ShopGoodCategory', 'loads', {}).subscribe((res: any) => {
            this.store.dispatch({
                type: "InitShopGoodCategory",
                payload: res.data.list
            });
        });
    }

    private getShopCategoryAction(): Observable<any> {
        const key = '__iwe7__shop__category';
        const cache = localStorage.getItem(key);
        if (cache) {
            const res = JSON.parse(cache);
            return of(res);
        } else {
            return this.util.wpost({
                type: "GetShopCategoryAction",
                payload: {}
            }).pipe(
                map(res => res.data),
                switchMap((res: string[]) => this.handlerShopCategory(res)),
                tap(res => {
                    localStorage.setItem(key, JSON.stringify(res));
                })
            );
        }
    }

    private handlerShopCategory(res: string[]): Observable<SFSchemaEnum> {
        const result: { [key: string]: any } = {};
        const sf: SFSchemaEnumType = {};
        return from(res).pipe(
            map(str => str.split(',')),
            switchMap(arr => {
                if (arr.length > 0) {
                    result[arr[0]] = result[arr[0]] || {};
                }
                if (arr.length > 1) {
                    result[arr[0]][arr[1]] = result[arr[0]][arr[1]] || {};
                }
                if (arr.length > 2) {
                    result[arr[0]][arr[1]][arr[2]] = result[arr[0]][arr[1]][arr[2]] || {};
                }
                return of(result);
            }),
            takeLast(1),
            map(str => {
                const cat = new Iwe7ShopCategory(str, "店铺分类");
                const json = cat.getJson();
                return json;
            })
        );
    }
}

export class Iwe7ShopCategory {
    // 美食 江浙菜 上海菜
    label: string;
    children: Iwe7ShopCategory[] = [];
    json: SFSchemaEnum = {
        children: []
    };
    constructor(obj: any, title: string, public parent?: Iwe7ShopCategory) {
        this.label = title;
        for (let key in obj) {
            this.children.push(new Iwe7ShopCategory(obj[key], key, this))
        }
    }

    getJson() {
        const children: SFSchemaEnum[] = [];
        this.children.map(child => {
            children.push(child.getJson())
        });
        if (children.length > 0) {
            this.json.children = children;
        } else {
            this.json.isLeaf = true;
        }
        this.json.title = this.label;
        this.json.label = this.label;
        this.json.value = this.label;
        this.json.parent = this.parent ? this.parent.label : "0";
        return this.json;
    }
}
