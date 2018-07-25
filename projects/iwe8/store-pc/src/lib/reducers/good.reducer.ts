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
                title: "商品编号",
                description: "商品编码，如需要和库存或其他系统编码一致需手工填写，或者可以随机生成",
                minLength: 4,
                ui: {
                    widget: "randomId",
                    errors: {
                        'required': '必填项'
                    }
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
            title: {
                type: "string",
                title: "名称",
                description: "给商品取一个营销型强的名字"
            },
            thumb: {
                title: "缩略图",
                type: "string",
                description: "商品缩略图，在首页及其他第三方显示缩略小图",
                ui: {
                    widget: "image"
                }
            },
            images: {
                type: "string",
                title: "图片",
                description: "商品图片将在详情页面展示，如图片很大，请自行切图",
                ui: {
                    widget: "images"
                }
            },
            price: {
                type: "number",
                title: "售价",
                description: "商品售价，与原价对比突出优惠力度",
                mininum: 0.01,
                maxinum: 1000000
            },
            price_del: {
                type: "number",
                title: "原价",
                description: "商品原价，与售价对比突出优惠力度",
                mininum: 0.01,
                maxinum: 1000000
            },
            url: {
                type: "string",
                title: "链接",
                description: "如果商品需要外链到其他地方，在这里填写完整的url，留空系统自动生成详情链接"
            },
            brand: {
                type: "string",
                title: "品牌",
                description: "品牌图标",
                ui: {
                    widget: "image",
                }
            },
            tip: {
                type: "string",
                title: "提醒",
                description: "广告语，购买语",
            },
            tag: {
                type: "string",
                title: "标签",
                description: "商品标签，如：最热，最新，推荐，新品等"
            }
        },
        required: [
            "tip", "tag", "brand", "price", "price_del",
            "images", "thumb", "title", "sig", "gid"
        ]
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
