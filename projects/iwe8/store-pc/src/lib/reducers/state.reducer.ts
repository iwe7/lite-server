import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export interface Iwe8ShopState {
    id: string;
}

export interface State extends EntityState<Iwe8ShopState> { }
export const adapter = createEntityAdapter<Iwe8ShopState>({
    selectId: (item: Iwe8ShopState) => item.id
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
export const stateSelector = createSelector(
    pcSelector,
    (state: any) => state.state
);
export const stateAllSelector = createSelector(
    stateSelector,
    adapter.getSelectors().selectAll
);
