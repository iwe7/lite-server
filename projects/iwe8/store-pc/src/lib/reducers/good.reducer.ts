import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export interface Iwe8ShopGood { }

export interface State extends EntityState<Iwe8ShopGood> { }
export const adapter = createEntityAdapter<Iwe8ShopGood>();
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
export const goodSelector = createSelector(
    pcSelector,
    (state: any) => state.good
);
export const goodAllSelector = createSelector(
    goodSelector,
    adapter.getSelectors().selectAll
);
