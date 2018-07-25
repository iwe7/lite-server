import { SFSchema, SFUISchema } from "@delon/form";

export interface State {
    schema: SFSchema;
    ui: SFUISchema;
    step1?: SFSchema;
    step2?: SFSchema;
}

export const initState: State = {
    step1: {
        properties: {
            background_pic_url: {
                title: "会员卡背景图",
                type: "string",
                description: "商家自定义会员卡背景图，须 先调用 上传图片接口 将背景图上传至CDN，否则报错， 卡面设计请遵循 微信会员卡自定义背景设计规范 ,像素大小控制在 1000像素*600像素以下",
                ui: {
                    widget: "upload"
                }
            },
        }
    },
    step2: {
        properties: {}
    },
    schema: {
        properties: {
            card_type: {
                description: "会员卡类型。",
                title: "类型",
                type: "string"
            },
            base_info: {
                type: "object",
                title: "基础信息",
                properties: {
                    logo_url: {
                        type: "string",
                        title: "商户logo",
                        description: "卡券的商户logo，建议像素为300*300。"
                    },
                    code_type: {
                        type: "string",
                        title: "展示类型",
                        enum: [
                            { label: "文本", value: "CODE_TYPE_TEXT" },
                            { label: "一维码", value: "CODE_TYPE_BARCODE" },
                            { label: "二维码", value: "CODE_TYPE_QRCODE" },
                            { label: "仅显示二维码", value: "CODE_TYPE_ONLY_QRCODE" },
                            { label: "仅显示一维码", value: "CODE_TYPE_ONLY_BARCODE" },
                            { label: "不显示任何码型", value: "CODE_TYPE_NONE" },
                        ]
                    },
                    pay_info: {
                        type: "object",
                        title: "支付功能",
                        properties: {}
                    },
                    swipe_card: {
                        type: "object",
                        title: "刷卡功能",
                        properties: {}
                    },
                    is_swipe_card: {
                        type: "boolean",
                        title: "刷卡",
                        description: "是否设置该会员卡支持拉出微信支付刷卡界面"
                    },
                    is_pay_and_qrcode: {
                        type: "boolean",
                        title: "同时支持",
                        description: "是否设置该会员卡中部的按钮同时支持微信支付刷卡和会员卡二维码"
                    },
                    brand_name: {
                        type: "string",
                        title: "商户名字",
                        description: "商户名字,字数上限为12个汉字。"
                    },
                    title: {
                        type: "string",
                        title: "卡券名",
                        description: "卡券名，字数上限为9个汉字 (建议涵盖卡券属性、服务及金额)。"
                    },
                    color: {
                        type: "string",
                        title: "券颜色",
                        description: "券颜色。按色彩规范标注填写Color010-Color100"
                    },
                    notice: {
                        type: "string",
                        title: "使用提醒",
                        description: "卡券使用提醒，字数上限为16个汉字。"
                    },
                    description: {
                        type: "string",
                        title: "使用说明",
                        description: "卡券使用说明，字数上限为1024个汉字。"
                    },
                    sku: {
                        type: "object",
                        title: "商品信息",
                        description: "商品信息"
                    },
                    quantity: {
                        type: "number",
                        title: "库存数量",
                        description: "卡券库存的数量，不支持填写0，上限为100000000。"
                    },
                    date_info: {
                        type: "object",
                        title: "使用日期",
                        description: "使用日期，有效期的信息。"
                    },
                    type: {
                        type: "string",
                        title: "时间的类型",
                        description: "使用时间的类型 支持固定时长有效类型 固定日期有效类型 永久有效类型( DATE_TYPE_PERMANENT)"
                    },
                    begin_timestamp: {
                        type: "integer",
                        title: "起用时间",
                        description: "type为DATE_TYPE_FIX_TIME_RANGE时专用， 表示起用时间。从1970年1月1日00:00:00至起用时间的秒数 （ 东八区时间,UTC+8，单位为秒 ）"
                    },
                    end_timestamp: {
                        type: "integer",
                        title: "结束时间",
                        description: "type为DATE_TYPE_FIX_TERM_RANGE时专用，表示结束时间 （ 东八区时间,UTC+8，单位为秒 ）"
                    },
                    fixed_term: {
                        type: "string",
                        title: "多少天内有效",
                        description: "type为DATE_TYPE_FIX_TERM时专用，表示自领取后多少天内有效，领取后当天有效填写0（单位为天）"
                    },
                    fixed_begin_term: {
                        type: "string",
                        title: "开始生效",
                        description: "type为DATE_TYPE_FIX_TERM时专用，表示自领取后多少天开始生效。（单位为天）"
                    },
                    use_custom_code: {
                        type: "boolean",
                        title: "自定义Code",
                        description: "是否自定义Code码。填写true或false，默认为false 通常自有优惠码系统的开发者选择自定义Code码，详情见 是否自定义code"
                    },
                    bind_openid: {
                        type: "boolean",
                        title: "指定用户",
                        description: "是否指定用户领取，填写true或false。默认为false"
                    },
                    service_phone: {
                        type: "string",
                        title: "客服电话",
                        description: "客服电话"
                    },
                    location_id_list: {
                        type: "string",
                        title: "门店位置ID",
                        description: "门店位置ID。调用 POI门店管理接口 获取门店位置ID。"
                    },
                    use_all_locations: {
                        type: "boolean",
                        title: "否支持全部门店",
                        description: "会员卡是否支持全部门店，填写后商户门店更新时会自动同步至卡券"
                    },
                    center_title: {
                        type: "string",
                        title: "居中的按钮",
                        description: "卡券中部居中的按钮，仅在卡券激活后且可用状态 时显示"
                    },
                    center_sub_title: {
                        type: "string",
                        title: "下方的提示语",
                        description: "显示在入口下方的提示语 ， 仅在卡券激活后且可用状态时显示"
                    },
                    center_url: {
                        type: "string",
                        title: "居中的url",
                        description: "顶部居中的url ，仅在卡券激活后且可用状态时显示"
                    },
                    custom_url_name: {
                        type: "string",
                        title: "入口名字",
                        description: "自定义跳转外链的入口名字。"
                    },
                    custom_url: {
                        type: "string",
                        title: "地址链接",
                        description: "入口跳转外链的地址链接。"
                    },
                    custom_url_sub_title: {
                        type: "string",
                        title: "右侧的提示语",
                        description: "显示在入口右侧的提示语。"
                    },
                    promotion_url_name: {
                        type: "string",
                        title: "入口名称",
                        description: "营销场景的自定义入口名称。"
                    },
                    promotion_url_sub_title: {
                        type: "string",
                        title: "右侧的提示语",
                        description: "显示在营销入口右侧的提示语。"
                    },
                    get_limit: {
                        type: "integer",
                        title: "数量限制",
                        description: "每人可领券的数量限制，建议会员卡每人限领一张"
                    },
                    can_share: {
                        type: "boolean",
                        title: "是否可分享",
                        description: "卡券领取页面是否可分享，默认为true"
                    },
                    can_give_friend: {
                        type: "boolean",
                        title: "是否可转赠",
                        description: "卡券是否可转赠,默认为true"
                    },
                    need_push_on_view: {
                        type: "boolean",
                        title: "推送事件",
                        description: "填写true为用户点击进入会员卡时推送事件，默认为false。详情见 进入会员卡事件推送"
                    },
                }
            },
            advanced_info: {
                type: "object",
                title: "高级信息",
                properties: {
                    advanced_info: {
                        type: "object",
                        title: "高级字段",
                        description: "创建优惠券特有的高级字段",
                        properties: {}
                    },
                    use_condition: {
                        type: "string",
                        title: "门槛（条件）字段",
                        description: "使用门槛（条件）字段，若不填写使用条件则在券面拼写 ：无最低消费限制，全场通用，不限品类；并在使用说明显示： 可与其他优惠共享"
                    },
                    accept_category: {
                        type: "string",
                        title: "可用的商品类目",
                        description: "指定可用的商品类目，仅用于代金券类型 ，填入后将在券面拼写适用于xxx"
                    },
                    reject_category: {
                        type: "string",
                        title: "不可用的商品类目",
                        description: "指定不可用的商品类目，仅用于代金券类型 ，填入后将在券面拼写不适用于xxxx"
                    },
                    least_cost: {
                        type: "string",
                        title: "满减门槛字段",
                        description: "满减门槛字段，可用于兑换券和代金券 ，填入后将在全面拼写消费满xx元可用。"
                    },
                    object_use_for: {
                        type: "string",
                        title: "购买xx可用类型门槛",
                        description: "购买xx可用类型门槛，仅用于兑换 ，填入后自动拼写购买xxx可用。"
                    },
                    can_use_with_other_discount: {
                        type: "string",
                        title: "共享门槛",
                        description: "不可以与其他类型共享门槛 ，填写false时系统将在使用须知里 拼写“不可与其他优惠共享”， 填写true时系统将在使用须知里 拼写“可与其他优惠共享”， 默认为true"
                    },
                    abstract: {
                        type: "string",
                        title: "名称",
                        description: "封面摘要结构体名称"
                    },
                    icon_url_list: {
                        type: "string",
                        title: "封面图片列表",
                        description: "封面图片列表，仅支持填入一 个封面图片链接， 上传图片接口 上传获取图片获得链接，填写 非CDN链接会报错，并在此填入。 建议图片尺寸像素850*350"
                    },
                    text_image_list: {
                        type: "string",
                        title: "图文列表",
                        description: "图文列表，显示在详情内页 ，优惠券券开发者须至少传入 一组图文列表"
                    },
                    image_url: {
                        type: "string",
                        title: "图片链接",
                        description: "图片链接，必须调用 上传图片接口 上传图片获得链接，并在此填入， 否则报错"
                    },
                    text: {
                        type: "string",
                        title: "图文描述",
                        description: "图文描述"
                    },
                    business_service: {
                        type: "string",
                        title: "商家服务类型",
                        description: "商家服务类型： BIZ_SERVICE_DELIVER 外卖服务； BIZ_SERVICE_FREE_PARK 停车位； BIZ_SERVICE_WITH_PET 可带宠物； BIZ_SERVICE_FREE_WIFI 免费wifi， 可多选"
                    },
                    time_limit: {
                        type: "string",
                        title: "使用时段限制",
                        description: "使用时段限制，包含以下字段"
                    },
                    type: {
                        type: "string",
                        title: "限制类型枚举值",
                        description: "限制类型枚举值：支持填入 MONDAY 周一 TUESDAY 周二 WEDNESDAY 周三 THURSDAY 周四 FRIDAY 周五 SATURDAY 周六 SUNDAY 周日 此处只控制显示， 不控制实际使用逻辑，不填默认不显示"
                    },
                    begin_hour: {
                        type: "string",
                        title: "起始时间",
                        description: "当前type类型下的起始时间（小时） ，如当前结构体内填写了MONDAY， 此处填写了10，则此处表示周一 10:00可用"
                    },
                    begin_minute: {
                        type: "string",
                        title: "起始时间",
                        description: "当前type类型下的起始时间（分钟） ，如当前结构体内填写了MONDAY， begin_hour填写10，此处填写了59， 则此处表示周一 10:59可用"
                    },
                    end_hour: {
                        type: "string",
                        title: "结束时间",
                        description: "当前type类型下的结束时间（小时） ，如当前结构体内填写了MONDAY， 此处填写了20， 则此处表示周一 10:00-20:00可用"
                    },
                    end_minute: {
                        type: "string",
                        title: "结束时间",
                        description: "当前type类型下的结束时间（分钟） ，如当前结构体内填写了MONDAY， begin_hour填写10，此处填写了59， 则此处表示周一 10:59-00:59可用"
                    }
                }
            },
            prerogative: {
                title: "卡特权说明",
                type: "string",
                description: "会员卡特权说明,限制1024汉字。"
            },
            auto_activate: {
                title: "自动激活",
                type: "boolean",
                description: "设置为true时用户领取会员卡后系统自动将其激活，无需调用激活接口，详情见 自动激活 。"
            },
            wx_activate: {
                title: "一键开卡",
                type: "boolean",
                description: "设置为true时会员卡支持一键开卡，不允许同时传入activate_url字段，否则设置wx_activate失效。填入该字段后仍需调用接口设置开卡项方可生效，详情见 一键开卡 。"
            },
            supply_bonus: {
                title: "显示积分",
                type: "boolean",
                description: "显示积分，填写true或false，如填写true，积分相关字段均为必 填 若设置为true则后续不可以被关闭。"
            },
            bonus_url: {
                type: "string",
                title: "积分详情",
                description: "设置跳转外链查看积分详情。仅适用于积分无法通过激活接口同步的情况下使用该字段。"
            },
            supply_balance: {
                type: "boolean",
                title: "是否支持储值",
                description: "是否支持储值，填写true或false。如填写true，储值相关字段均为必 填 若设置为true则后续不可以被关闭。该字段须开通储值功能后方可使用， 详情见： 获取特殊权限"
            },
            balance_url: {
                type: "string",
                title: "余额详情",
                description: "设置跳转外链查看余额详情。仅适用于余额无法通过激活接口同步的情况下使用该字段。"
            },
            custom_field1: {
                type: "object",
                title: "自定义类目",
                description: "自定义会员信息类目，会员卡激活后显示",
                properties: {
                    name_type: {
                        type: "string",
                        title: "半自定义名称",
                        enum: [
                            { label: "等级", value: "FIELD_NAME_TYPE_LEVEL" },
                            { label: "优惠券", value: "FIELD_NAME_TYPE_COUPON" },
                            { label: "印花", value: "FIELD_NAME_TYPE_STAMP" },
                            { label: "折扣", value: "FIELD_NAME_TYPE_DISCOUNT" },
                            { label: "成就", value: "FIELD_NAME_TYPE_ACHIEVEMEN" },
                            { label: "里程", value: "FIELD_NAME_TYPE_MILEAGE" },
                            { label: "集点", value: "FIELD_NAME_TYPE_SET_POINTS" },
                            { label: "等级", value: "FIELD_NAME_TYPE_TIMS" },
                            { label: "等级", value: "FIELD_NAME_TYPE_LEVEL" },
                            { label: "等级", value: "FIELD_NAME_TYPE_LEVEL" },
                            { label: "等级", value: "FIELD_NAME_TYPE_LEVEL" },
                            { label: "等级", value: "FIELD_NAME_TYPE_LEVEL" },
                            { label: "次数", value: "FIELD_NAME_TYPE_LEVEL" },
                        ],
                    },
                    name: {
                        type: "string",
                        title: "name"
                    },
                    url: {
                        type: "string",
                        title: "url"
                    }
                }
            },
            custom_field2: {
                type: "object",
                title: "自定义类目",
                description: "自定义会员信息类目，会员卡激活后显示",
                properties: {
                    name_type: {
                        type: "string",
                        title: "半自定义名称",
                        enum: [
                            { label: "等级", value: "FIELD_NAME_TYPE_LEVEL" },
                            { label: "优惠券", value: "FIELD_NAME_TYPE_COUPON" },
                            { label: "印花", value: "FIELD_NAME_TYPE_STAMP" },
                            { label: "折扣", value: "FIELD_NAME_TYPE_DISCOUNT" },
                            { label: "成就", value: "FIELD_NAME_TYPE_ACHIEVEMEN" },
                            { label: "里程", value: "FIELD_NAME_TYPE_MILEAGE" },
                            { label: "集点", value: "FIELD_NAME_TYPE_SET_POINTS" },
                            { label: "等级", value: "FIELD_NAME_TYPE_TIMS" },
                            { label: "等级", value: "FIELD_NAME_TYPE_LEVEL" },
                            { label: "等级", value: "FIELD_NAME_TYPE_LEVEL" },
                            { label: "等级", value: "FIELD_NAME_TYPE_LEVEL" },
                            { label: "等级", value: "FIELD_NAME_TYPE_LEVEL" },
                            { label: "次数", value: "FIELD_NAME_TYPE_LEVEL" },
                        ],
                    },
                    name: {
                        type: "string",
                        title: "name"
                    },
                    url: {
                        type: "string",
                        title: "url"
                    }
                }
            },
            custom_field3: {
                type: "object",
                title: "自定义类目",
                description: "自定义会员信息类目，会员卡激活后显示",
                properties: {
                    name_type: {
                        type: "string",
                        title: "半自定义名称",
                        enum: [
                            { label: "等级", value: "FIELD_NAME_TYPE_LEVEL" },
                            { label: "优惠券", value: "FIELD_NAME_TYPE_COUPON" },
                            { label: "印花", value: "FIELD_NAME_TYPE_STAMP" },
                            { label: "折扣", value: "FIELD_NAME_TYPE_DISCOUNT" },
                            { label: "成就", value: "FIELD_NAME_TYPE_ACHIEVEMEN" },
                            { label: "里程", value: "FIELD_NAME_TYPE_MILEAGE" },
                            { label: "集点", value: "FIELD_NAME_TYPE_SET_POINTS" },
                            { label: "等级", value: "FIELD_NAME_TYPE_TIMS" },
                            { label: "等级", value: "FIELD_NAME_TYPE_LEVEL" },
                            { label: "等级", value: "FIELD_NAME_TYPE_LEVEL" },
                            { label: "等级", value: "FIELD_NAME_TYPE_LEVEL" },
                            { label: "等级", value: "FIELD_NAME_TYPE_LEVEL" },
                            { label: "次数", value: "FIELD_NAME_TYPE_LEVEL" },
                        ],
                    },
                    name: {
                        type: "string",
                        title: "name"
                    },
                    url: {
                        type: "string",
                        title: "url"
                    }
                }
            },
            name_type: {
                type: "string",
                title: "半自定义名称",
                enum: [
                    { label: "等级", value: "FIELD_NAME_TYPE_LEVEL" },
                    { label: "优惠券", value: "FIELD_NAME_TYPE_COUPON" },
                    { label: "印花", value: "FIELD_NAME_TYPE_STAMP" },
                    { label: "折扣", value: "FIELD_NAME_TYPE_DISCOUNT" },
                    { label: "成就", value: "FIELD_NAME_TYPE_ACHIEVEMEN" },
                    { label: "里程", value: "FIELD_NAME_TYPE_MILEAGE" },
                    { label: "集点", value: "FIELD_NAME_TYPE_SET_POINTS" },
                    { label: "等级", value: "FIELD_NAME_TYPE_TIMS" },
                    { label: "等级", value: "FIELD_NAME_TYPE_LEVEL" },
                    { label: "等级", value: "FIELD_NAME_TYPE_LEVEL" },
                    { label: "等级", value: "FIELD_NAME_TYPE_LEVEL" },
                    { label: "等级", value: "FIELD_NAME_TYPE_LEVEL" },
                    { label: "次数", value: "FIELD_NAME_TYPE_LEVEL" },
                ],
                description: "会员信息类目半自定义名称，当开发者变更这类类目信息的value值时 可以选择触发系统模板消息通知用户"
            },
            name: {
                type: "string",
                title: "类目名称",
                description: "会员信息类目自定义名称，当开发者变更这类类目信息的value值时 不会触发系统模板消息通知用户"
            },
            url: {
                type: "string",
                title: "类目url",
                description: "点击类目跳转外链url"
            },
            bonus_cleared: {
                type: "string",
                title: "积分清零规则",
                description: "积分清零规则。"
            },
            bonus_rules: {
                type: "string",
                title: "积分规则",
                description: "积分规则。"
            },
            balance_rules: {
                type: "string",
                title: "储值说明",
                description: "储值说明。"
            },
            activate_url: {
                type: "string",
                title: "激活url",
                description: "激活会员卡的url。"
            },
            activate_app_brand_user_name: {
                type: "string",
                title: "激活username",
                description: "激活会原卡url对应的小程序user_name，仅可跳转该公众号绑定的小程序"
            },
            activate_app_brand_pass: {
                type: "string",
                title: "激活Url",
                description: "激活会原卡url对应的小程序path"
            },
            custom_cell1: {
                type: "object",
                title: "自定义类目",
                description: "自定义会员信息类目，会员卡激活后显示。"
            },
            tips: {
                type: "string",
                title: "右侧提醒",
                description: "入口右侧提示语，6个汉字内。"
            },
            bonus_rule: {
                type: "object",
                title: "积分规则",
                description: "积分规则 。"
            },
            cost_money_unit: {
                type: "integer",
                title: "消费金额",
                description: "消费金额。以分为单位。"
            },
            increase_bonus: {
                type: "integer",
                title: "增加的积分",
                description: "对应增加的积分。"
            },
            max_increase_bonus: {
                type: "integer",
                title: "积分上限",
                description: "用户单次可获取的积分上限。"
            },
            init_increase_bonus: {
                type: "integer",
                title: "初始设置积分",
                description: "初始设置积分。"
            },
            cost_bonus_unit: {
                type: "integer",
                title: "每使用5积分",
                description: "每使用5积分。"
            },
            reduce_money: {
                type: "integer",
                title: "抵扣xx元",
                description: "抵扣xx元，（这里以分为单位）"
            },
            least_moneytouse_bonus: {
                type: "integer",
                title: "折扣条件",
                description: "抵扣条件，满xx元（这里以分为单位）可用。"
            },
            max_reduce_bonus: {
                type: "integer",
                title: "折扣条件",
                description: "抵扣条件，单笔最多使用xx积分。"
            },
            discount: {
                type: "integer",
                title: "折扣",
                description: "折扣，该会员卡享受的折扣优惠,填10就是九折。"
            }
        }
    },
    ui: {}
}

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
