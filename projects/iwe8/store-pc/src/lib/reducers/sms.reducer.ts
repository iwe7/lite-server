import { createFeatureSelector, MemoizedSelector, createSelector } from '@ngrx/store';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
export interface Iwe8SmsSetting {
    access_key_id?: string;
    access_key_secret?: string;
    sign_name?: string;
    app_id?: string;
    app_key?: string;
    project?: string;
    account_sid?: string;
    account_token?: string;
    is_sub_account?: boolean;
    sms_user?: string;
    sms_key?: string;
    timestamp?: boolean;
    ak?: string;
    sk?: string;
    invoke_id?: string;
    domain?: string;
    user_id?: string;
    password?: string;
    account?: string;
    ip?: string;
    ext_no?: string;
    channel?: any;
    sign?: string;
    unsubscribe?: string;
    app_secret?: string;
    username?: string;
    gwid?: string;
    from?: string;
    token?: string;
    sdk_app_id?: string;
}

export interface Iwe8Sms {
    id: string;
    title: string;
    setting?: Iwe8SmsSetting;
    open?: boolean;
    order?: number;
}

export interface State extends EntityState<Iwe8Sms> {

}

export const adapter: EntityAdapter<Iwe8Sms> = createEntityAdapter({
    selectId: (item: Iwe8Sms) => item.id
});
export let initState: State = adapter.getInitialState();

const types: Iwe8Sms[] = [
    { id: 'aliyun', title: '阿里云', setting: {}, order: 1, open: true },
    { id: 'yunpian', title: '云片' },
    { id: 'submail', title: 'Submail' },
    { id: 'luosimao', title: '螺丝帽' },
    { id: 'yuntongxun', title: '容联云通讯' },
    { id: 'huyi', title: '互亿无线' },
    { id: 'juhe', title: '聚合数据' },
    { id: 'sendcloud', title: 'SendCloud' },
    { id: "baidu", title: '百度云' },
    { id: "huaxin", title: '华信短信平台' },
    { id: "chuanglan", title: '253云通讯（创蓝）' },
    { id: "rongcloud", title: '融云' },
    { id: "twilio", title: 'twilio' },
    { id: "tianyiwuxian", title: '天毅无线' },
    { id: "qcloud", title: '腾讯云 SMS' },
    { id: "avatardata", title: '阿凡达数据' }
];

initState = adapter.addAll(types, initState);

export function reducer(
    state: State = initState,
    action: any
) {
    switch (action.type) {
        case "InitSms": {
            return adapter.addAll(action.payload, state);
        }
        default: {
            return state;
        }
    }
}
export const pcSelector: MemoizedSelector<any, any> = createFeatureSelector('pc');
export const smsSelector: MemoizedSelector<any, State> = createSelector(
    pcSelector,
    (state: any) => state.sms
);
export const smsAllSelector: MemoizedSelector<State, Iwe8Sms[]> = createSelector(
    smsSelector,
    adapter.getSelectors().selectAll
);
