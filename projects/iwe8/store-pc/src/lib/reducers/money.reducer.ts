import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export interface Iwe8ShopMoney {
    id: string;
}

export interface State extends EntityState<Iwe8ShopMoney> { }
export const adapter = createEntityAdapter<Iwe8ShopMoney>({
    selectId: (item: Iwe8ShopMoney) => item.id
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
export const moneySelector = createSelector(
    pcSelector,
    (state: any) => state.money
);
export const moneyAllSelector = createSelector(
    moneySelector,
    adapter.getSelectors().selectAll
);
