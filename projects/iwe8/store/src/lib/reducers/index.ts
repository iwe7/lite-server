import { ActionReducerMap } from '@ngrx/store';

import * as form from './form.reducer';
import * as schema from './schema.reducer';
import * as ui from './ui.reducer';

export interface State {
    [key: string]: any;
    schema: schema.State;
    form: form.State;
    ui: ui.State;
}
export const reducers: ActionReducerMap<State> = {
    schema: schema.reducer,
    form: form.reducer,
    ui: ui.reducer
}
