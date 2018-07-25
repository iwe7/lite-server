import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export interface Iwe8ShopOrder {
    id: string;
}

export interface State extends EntityState<Iwe8ShopOrder> { }
export const adapter = createEntityAdapter<Iwe8ShopOrder>({
    selectId: (item: Iwe8ShopOrder) => item.id
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
export const orderSelector = createSelector(
    pcSelector,
    (state: any) => state.order
);
export const orderAllSelector = createSelector(
    orderSelector,
    adapter.getSelectors().selectAll
);
