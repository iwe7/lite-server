import { SimpleTableColumn } from '@delon/abc';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SFSchema, SFUISchema } from '@delon/form';
export interface Iwe8ShopGood {
    id: string;
}

export interface State extends EntityState<Iwe8ShopGood> {
    schema: SFSchema;
    ui: SFUISchema;
    columns: SimpleTableColumn[];
}
export const adapter = createEntityAdapter<Iwe8ShopGood>({
    selectId: (item: Iwe8ShopGood) => item.id
});
export const initState: any = adapter.getInitialState({
    schema: {
        properties: {
            gid: {
                type: "string",
                title: "商品编号"
            },
            sid: {
                type: "string",
                title: "店铺",
                ui: {
                    widget: "select",
                    asyncData: "pc.shop.entities"
                }
            },
            title: {
                type: "string",
                title: "名称"
            },
            thumb: {
                title: "缩略图",
                type: "string",
                ui: {
                    widget: "upload",
                    asyncData: "pc.good.current.images"
                }
            },
            images: {
                type: "string",
                title: "图片",
                ui: {
                    widget: "upload",
                    asyncData: "pc.good.current.images"
                }
            },
            price: {
                type: "number",
                title: "售价"
            },
            price_del: {
                type: "number",
                title: "原价"
            },
            url: {
                type: "string",
                title: "链接",
            },
            brand: {
                type: "string",
                title: "品牌",
                ui: {
                    widget: "upload",
                    asyncData: "pc.good.current.band"
                }
            },
            tip: {
                type: "string",
                title: "提醒"
            },
            tag: {
                type: "string",
                title: "标签"
            }
        }
    },
    ui: {},
    columns: [{ title: "商品编号" }]
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
export const goodSelector = createSelector(
    pcSelector,
    (state: any) => state.good
);
export const goodAllSelector = createSelector(
    goodSelector,
    adapter.getSelectors().selectAll
);
