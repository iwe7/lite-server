import { createSelector, createFeatureSelector } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { SFSchema, SFUISchema } from '@delon/form';
export interface Iwe8Shop {
    id: string;
    title: string;
}
export interface Iwe8ShopNav {
    title: string;
    url: string;
    nav?: Iwe8ShopNav[];
}
export interface State extends EntityState<Iwe8Shop> {
    currentShop?: Iwe8Shop;
    schema?: SFSchema;
    ui?: SFUISchema;
    category?: string[];
}
export const adapter = createEntityAdapter<Iwe8Shop>();
export const goodAdapter = createEntityAdapter<Iwe8Shop>();

export const initState: State = adapter.getInitialState({
    currentShop: null,
    schema: {
        properties: {
            categories: {
                type: "string",
                title: "门店分类",
                description: "对应公众平台后台门店分类",
                ui: {
                    widget: "cascader",
                    asyncData: "pc.shop.category",
                }
            },
            sid: {
                type: "string",
                title: "商户内部编号"
            },
            business_name: {
                type: "string",
                title: "门店名称",
                description: "门店名不得含有区域地址信息（如，北京市XXX公司）"
            },
            branch_name: {
                type: "string",
                title: "分店名称",
                description: "分店名不得含有区域地址信息（如，“北京国贸店”中的“北京”）"
            },
            address: {
                type: "object",
                title: "地址",
                properties: {
                    offset_type: {
                        type: "number",
                        title: "坐标类型",
                        enum: [
                            { title: "高德经纬度", label: "高德经纬度", value: 0 },
                            { title: "火星坐标", label: "火星坐标", value: 1 },
                            { title: "sogou经纬度", label: "sogou经纬度", value: 2 },
                            { title: "百度经纬度", label: "百度经纬度", value: 3 },
                            { title: "mapbar经纬度", label: "mapbar经纬度", value: 4 },
                            { title: "GPS坐标", label: "GPS坐标", value: 5 },
                            { title: "sogou墨卡托坐标", label: "sogou墨卡托坐标", value: 6 },
                        ],
                        default: 0
                    },
                    province: {
                        type: "string",
                        title: "省份"
                    },
                    city: {
                        type: "string",
                        title: "城市"
                    },
                    district: {
                        type: "string",
                        title: "地区"
                    },
                    address: {
                        type: "string",
                        title: "详细地址"
                    },
                    longitude: {
                        type: "string",
                        title: "经度"
                    },
                    latitude: {
                        type: "string",
                        title: "纬度"
                    },
                },
                ui: {
                    widget: "address"
                }
            },

            telephone: {
                type: "string",
                title: "电话",
                description: "固定电话需加区号；区号、分机号均用“-”连接"
            },
            photo_list: {
                type: "array",
                title: "门店图片",
                description: "像素要求必须为640*340像素，支持.jpg .jpeg .bmp .png格式，大小不超过5M"
            },
            recommend: {
                type: "string",
                title: "推荐品",
                description: "如，推荐菜，推荐景点，推荐房间",
                ui: {
                    widget: 'textarea',
                    autosize: { minRows: 2, maxRows: 6 }
                }
            },
            special: {
                type: "string",
                title: "特色服务",
                description: "如，免费停车，WiFi",
                ui: {
                    widget: 'textarea',
                    autosize: { minRows: 2, maxRows: 6 }
                }
            },
            introduction: {
                type: "string",
                title: "商户简介",
                description: "对品牌或门店的简要介绍",
                ui: {
                    widget: 'textarea',
                    autosize: { minRows: 2, maxRows: 6 }
                }
            },
            open_time: {
                type: "string",
                title: "营业时间",
                description: "24 小时制表示，用“-”连接，如 8:00-20:00"
            },
            avg_price: {
                type: "number",
                title: "人均价格",
                description: "大于零的整数，须如实填写，默认单位为人民币"
            }
        }
    },
    ui: {

    },
    category: []
});

export function reducer(
    state: State = initState,
    action: any
) {
    switch (action.type) {
        case "InitShop": {
            state = adapter.addAll(action.payload, state);
            return state;
        }
        case "SetCurrentShop": {
            return { ...state, currentShop: action.payload };
        }
        case "InitShopCateogry": {
            return { ...state, category: action.payload };
        }
        case "SetCurrentShopById": {
            const id = action.payload;
            const shop = state.entities[id];
            state = { ...state, currentShop: shop };
            return state;
        }
        default: {
            return state;
        }
    }
}
export const pcSelector = createFeatureSelector('pc');
export const shopSelector = createSelector(
    pcSelector,
    (state: any) => state.shop
);
export const shopAllSelector = createSelector(
    shopSelector,
    adapter.getSelectors().selectAll
);
