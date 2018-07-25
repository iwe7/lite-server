import { ActionReducerMap } from '@ngrx/store';
import * as sider from './sider.reducer';
import * as sms from './sms.reducer';
import * as payment from './payment.reducer';
import * as template from './template.reducer';
import * as qiniu from './qiniu.reducer';
import * as system from './system.reducer';
import * as shop from './shop.reducer';
import * as good from './good.reducer';
import * as goodCategory from './good-category.reducer';
import * as order from './order.reducer';
import * as employer from './employer.reducer';
import * as work from './work.reducer';
import * as money from './money.reducer';
import * as state from './state.reducer';
import * as card from './card.reducer';
import * as coupon from './coupon.reducer';

export interface State {
    sider: sider.State;
    sms: sms.State;
    payment: payment.State;
    template: template.State;
    qiniu: qiniu.State;
    system: system.State;
    shop: shop.State;
    good: good.State;
    goodCategory: goodCategory.State;
    order: order.State;
    employer: employer.State;
    work: work.State;
    money: money.State;
    state: state.State;
    card: card.State;
    coupon: coupon.State;
}

export const reducers: ActionReducerMap<State> = {
    sider: sider.reducer,
    sms: sms.reducer,
    payment: payment.reducer,
    template: template.reducer,
    qiniu: qiniu.reducer,
    system: system.reducer,
    shop: shop.reducer,
    good: good.reducer,
    goodCategory: goodCategory.reducer,
    order: order.reducer,
    employer: employer.reducer,
    work: work.reducer,
    money: money.reducer,
    state: state.reducer,
    card: card.reducer,
    coupon: coupon.reducer
};
