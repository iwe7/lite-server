
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Iwe7Util2Service } from 'iwe7-util2';
import { switchMap, map } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable()
export class ShopEffectService {
    @Effect()
    UpsertShop$ = this.actions.ofType('UpdateShop').pipe(
        switchMap((res: any) => {
            const msgData = this.msg.loading('数据提交中');
            return this.util.wpost('iwe7Shop', 'update', res.payload, {}).pipe(
                map(res => {
                    this.msg.remove(msgData.messageId);
                    return {
                        type: "UpdateShopSuccess",
                        payload: res.data
                    }
                })
            );
        })
    );
    @Effect()
    AddGood$ = this.actions.ofType('AddGood').pipe(
        switchMap((res: any) => {
            const msgData = this.msg.loading('数据提交中');
            return this.util.wpost('iwe7ShopGood', 'add', res.payload, {}).pipe(
                map(res => {
                    this.msg.remove(msgData.messageId);
                    return {
                        type: "AddGoodSuccess",
                        payload: res.data
                    }
                })
            );
        })
    );

    @Effect()
    AddGoodCategory$ = this.actions.ofType('AddGoodCategory').pipe(
        switchMap((res: any) => {
            const msgData = this.msg.loading('数据提交中');
            return this.util.wpost('iwe7ShopGoodCategory', 'add', res.payload, {}).pipe(
                map(res => {
                    this.msg.remove(msgData.messageId);
                    return {
                        type: "AddGoodCategorySuccess",
                        payload: res.data
                    }
                })
            );
        })
    );
    constructor(
        public actions: Actions,
        public util: Iwe7Util2Service,
        public msg: NzMessageService
    ) { }
}
