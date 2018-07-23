import { SFUISchema, SFSchema } from '@delon/form';

export interface Iwe8QiniuSetting {
    accesskey: string;
    secretkey: string;
    bucket: string;
    url: string;
}

export interface State {
    setting: Iwe8QiniuSetting;
    schema: SFSchema;
    ui: SFUISchema;
}

export const initState: State = {
    setting: {
        accesskey: "",
        secretkey: "",
        bucket: "",
        url: ""
    },
    schema: {
        properties: {
            accesskey: {
                type: "string",
                title: "签名的公钥"
            },
            secretkey: {
                type: "string",
                title: "签名的私钥"
            },
            bucket: {
                type: "string",
                title: "存储空间"
            },
            url: {
                type: "string",
                title: "自定义域名"
            },
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
