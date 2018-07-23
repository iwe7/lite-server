import { SFSchema, SFUISchema } from '@delon/form';


export interface State {
    setting: {
        industryId1: string;
        industryId2: string;
        credit1_in: string;
        credit1_out: string;
        credit2_change: string;
        group_change: string;
        card_count_in: string;
        card_count_out: string;
        card_time_in: string;
        card_timeout: string;
    };
    tpls: any[];
    industry: any[];
    schema: SFSchema;
    ui: SFUISchema;
}

export const initState: State = {
    setting: {
        // 主行业
        industryId1: "IT科技 - 互联网",
        // 副行业
        industryId2: "电子商务",
        // 模板
        credit1_in: "",
        credit1_out: '',
        credit2_change: '',
        group_change: '',
        card_count_in: '',
        card_count_out: '',
        card_time_in: '',
        card_timeout: '',
    },
    // 所有模板列表
    tpls: [],
    // 所有行业列表
    industry: [],
    schema: {
        properties: {
            industryId1: {
                type: "string",
                title: "主行业"
            },
            industryId2: {
                type: "string",
                title: "副行业"
            },
            credit1_in: {
                type: "string",
                title: "会员余额充值",
                description: "标题为：”会员充值通知“，编号为：“TM00009”的模板。"
            },
            credit1_out: {
                type: "string",
                title: "会员余额消费",
                description: "标题为：”余额变更通知“，编号为：“OPENTM207266084”的模板。"
            },
            credit2_change: {
                type: "string",
                title: "会员积分变更",
                description: "标题为：”积分提醒“，编号为：“TM00335”的模板。"
            },
            group_change: {
                type: "string",
                title: "会员等级变更",
                description: "标题为：”会员级别变更提醒“，编号为：“TM00891”的模板"
            },
            card_count_in: {
                type: "string",
                title: "会员卡计次充值",
                description: "标题为：”计次充值通知“，编号为：“OPENTM207207134”的模板"
            },
            card_count_out: {
                type: "string",
                title: "会员卡计次消费",
                description: "标题为：”计次消费通知“，编号为：“OPENTM202322532”的模板"
            },
            card_time_in: {
                type: "string",
                title: "会员卡计时充值",
                description: "标题为：”自动续费成功通知“，编号为：“TM00956”的模板"
            },
            card_timeout: {
                type: "string",
                title: "会员卡计时即将到期",
                description: "标题为：”会员到期提醒“，编号为：“TM00008”的模板"
            }
        }
    },
    ui: {}
};

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
