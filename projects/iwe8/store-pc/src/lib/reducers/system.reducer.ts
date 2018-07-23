import { SFSchema, SFUISchema } from '@delon/form';
export interface Iwe8SystemSetting {
    // 名称
    title: string;
    // logo
    logo: string;
    // 简介
    description: string;
    // 缩略图
    thumb: string;
    // 加载图标
    loading: string;
    // 平台电话
    phone: string;
}

export interface State {
    setting: Iwe8SystemSetting;
    schema: SFSchema;
    ui: SFUISchema;
}

export const initState: State = {
    setting: {
        title: "",
        logo: '',
        description: '',
        thumb: '',
        loading: '',
        phone: ''
    },
    schema: {
        properties: {
            title: {
                type: "string",
                title: "平台名"
            },
            logo: {
                type: "string",
                title: "平台logo"
            },
            description: {
                type: "string",
                title: "平台简介"
            },
            thumb: {
                type: "string",
                title: "平台缩略图"
            },
            loading: {
                type: "string",
                title: "加载图标"
            },
            phone: {
                type: "string",
                title: "联系电话"
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
