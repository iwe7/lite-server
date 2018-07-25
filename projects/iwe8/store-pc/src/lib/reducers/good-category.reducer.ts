import { SimpleTableColumn } from '@delon/abc';
import { SFUISchema } from '@delon/form';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SFSchema } from '@delon/form';
export interface Iwe8ShopGoodCategory {
    id: string;
}

export interface State extends EntityState<Iwe8ShopGoodCategory> {
    schema: SFSchema;
    ui: SFUISchema;
    columns: SimpleTableColumn[];
}
export const adapter = createEntityAdapter<Iwe8ShopGoodCategory>({
    selectId: (item: Iwe8ShopGoodCategory) => item.id
});
export const initState: any = adapter.getInitialState({
    schema: {
        properties: {
            cid: {
                type: "string",
                title: "分类编号",
                ui: {
                    widget: "randomId"
                }
            },
            sid: {
                type: "string",
                title: "店铺",
                description: "商品所属店铺",
                ui: {
                    widget: "shopSelector"
                }
            },
            name: {
                type: "string",
                title: "分类名"
            },
            logo: {
                type: "string",
                title: "分类图标",
                ui: {
                    widget: "image"
                }
            }
        }
    },
    ui: {},
    columns: [{ title: "分类编号" }]
});

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
