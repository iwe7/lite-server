import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export interface Iwe8ShopEmployer {
    id: string;
}

export interface State extends EntityState<Iwe8ShopEmployer> { }
export const adapter = createEntityAdapter<Iwe8ShopEmployer>({
    selectId: (item: Iwe8ShopEmployer) => item.id
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
export const employerSelector = createSelector(
    pcSelector,
    (state: any) => state.employer
);
export const employerAllSelector = createSelector(
    employerSelector,
    adapter.getSelectors().selectAll
);
