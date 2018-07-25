import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export interface Iwe8ShopWork {
    id: string;
}

export interface State extends EntityState<Iwe8ShopWork> { }
export const adapter = createEntityAdapter<Iwe8ShopWork>({
    selectId: (item: Iwe8ShopWork) => item.id
});
export const initState: State = adapter.getInitialState();

export function reducer(
    state: State = initState,
    action: any
) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}
export const pcSelector = createFeatureSelector('pc');
export const workSelector = createSelector(
    pcSelector,
    (state: any) => state.work
);
export const workAllSelector = createSelector(
    workSelector,
    adapter.getSelectors().selectAll
);
