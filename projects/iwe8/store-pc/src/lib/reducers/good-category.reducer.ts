import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export interface Iwe8ShopGoodCategory {
    id: string;
}

export interface State extends EntityState<Iwe8ShopGoodCategory> { }
export const adapter = createEntityAdapter<Iwe8ShopGoodCategory>({
    selectId: (item: Iwe8ShopGoodCategory) => item.id
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
export const goodCategorySelector = createSelector(
    pcSelector,
    (state: any) => state.goodCategory
);
export const goodCategoryAllSelector = createSelector(
    goodCategorySelector,
    adapter.getSelectors().selectAll
);
