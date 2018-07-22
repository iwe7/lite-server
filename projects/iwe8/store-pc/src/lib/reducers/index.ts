import { ActionReducerMap } from '@ngrx/store';
import * as sider from './sider.reducer';
import * as sms from './sms.reducer';


export interface State {
    sider: sider.State;
    sms: sms.State;
}

export const reducers: ActionReducerMap<State> = {
    sider: sider.reducer,
    sms: sms.reducer
};
