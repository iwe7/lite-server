import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SFSchema, SFUISchema } from '@delon/form';
export interface Iwe8ShopCoupon {
    card_id: string;
    card_type:
    "CASH" | "GROUPON" | "DISCOUNT" | "GIFT"
    | "GENERAL_COUPON" | "GENERAL_CARD" | "MEMBER_CARD"
    | "MEETING_TICKET" | "SCENIC_TICKET" | "MOVIE_TICKET"
    | "BOARDING_PASS";
    cash?: any;
    groupon?: any;
    gift?: any;
    general_coupon?: any;
    general_card?: any;
    member_card?: any;
    meeting_ticket?: any;
    scenic_ticket?: any;
    movie_ticket?: any;
    boarding_pass?: any;
    discount?: any;
}

export interface State extends EntityState<Iwe8ShopCoupon> {
    schema?: SFSchema;
    ui?: SFUISchema;
}
export const adapter = createEntityAdapter<Iwe8ShopCoupon>({
    selectId: (item: Iwe8ShopCoupon) => item.card_id
});
export const initState: State = adapter.getInitialState({
    schema: {
        properties: {
            base_info: {
                type: "object",
                properties: {
                    logo_url: {},
                    code_type: {},
                    brand_name: {},
                    title: {},
                    color: {},
                    notice: {},
                    description: {},
                    sku: {},
                    quantity: {},
                    date_info: {},
                    type: {},
                    begin_timestamp: {},
                    end_timestamp: {},
                    fixed_term: {},
                    fixed_begin_term: {},
                    use_custom_code: {},
                    get_custom_code_mode: {},
                    bind_openid: {},
                    service_phone: {},
                    location_id_list: {},
                    use_all_locations: {},
                    center_title: {},
                    center_sub_title: {},
                    center_url: {},
                    center_app_brand_user_name: {},
                    center_app_brand_pass: {},
                    custom_url_name: {},
                    custom_url: {},
                    custom_url_sub_title: {},
                    custom_app_brand_user_name: {},
                    custom_app_brand_pass: {},
                    promotion_url_name: {},
                    promotion_url: {},
                    promotion_url_sub_title: {},
                    promotion_app_brand_user_name: {},
                    promotion_app_brand_pass: {},
                    get_limit: {},
                    use_limit: {},
                    can_share: {},
                    can_give_friend: {},
                }
            },
            advanced_info: {
                type: "object",
                properties: {
                    advanced_info: {},
                    use_condition: {},
                    accept_category: {},
                    reject_category: {},
                    least_cost: {},
                    object_use_for: {},
                    can_use_with_other_discount: {},
                    abstract: {},
                    icon_url_list: {},
                    text_image_list: {},
                    image_url: {},
                    text: {},
                    business_service: {},
                    time_limit: {},
                    type: {},
                    begin_hour: {},
                    begin_minute: {},
                    end_hour: {},
                    end_minute: {}
                }
            }
        }
    }
});

export function reducer(
    state: State = initState,
    action: any
) {
    switch (action.type) {
        case "InitCouponAction": {
            if(action.payload){
                return adapter.addAll(action.payload, state);
            }
            return state;
        }
        default: {
            return state;
        }
    }
}
export const pcSelector = createFeatureSelector('pc');
export const couponSelector = createSelector(
    pcSelector,
    (state: any) => state.coupon
);
export const couponAllSelector = createSelector(
    couponSelector,
    adapter.getSelectors().selectAll
);
