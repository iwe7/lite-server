import { ActionReducerMap } from '@ngrx/store';
import * as sider from './sider.reducer';
import * as sms from './sms.reducer';
import * as payment from './payment.reducer';
import * as template from './template.reducer';
import * as qiniu from './qiniu.reducer';
import * as system from './system.reducer';
import * as shop from './shop.reducer';


export interface State {
    sider: sider.State;
    sms: sms.State;
    payment: payment.State;
    template: template.State;
    qiniu: qiniu.State;
    system: system.State;
    shop: shop.State;
}

export const reducers: ActionReducerMap<State> = {
    sider: sider.reducer,
    sms: sms.reducer,
    payment: payment.reducer,
    template: template.reducer,
    qiniu: qiniu.reducer,
    system: system.reducer,
    shop: shop.reducer
};
