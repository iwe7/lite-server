import { SFSchema, SFUISchema } from '@delon/form';
import { createFeatureSelector, MemoizedSelector, createSelector } from '@ngrx/store';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
export interface Iwe8SmsSetting {
    access_key_id?: string;
    access_key_secret?: string;
    sign_name?: string;
    app_id?: string;
    app_key?: string;
    project?: string;
    account_sid?: string;
    account_token?: string;
    is_sub_account?: boolean;
    sms_user?: string;
    sms_key?: string;
    timestamp?: boolean;
    ak?: string;
    sk?: string;
    invoke_id?: string;
    domain?: string;
    user_id?: string;
    password?: string;
    account?: string;
    ip?: string;
    ext_no?: string;
    channel?: any;
    sign?: string;
    unsubscribe?: string;
    app_secret?: string;
    username?: string;
    gwid?: string;
    from?: string;
    token?: string;
    sdk_app_id?: string;
}

export interface Iwe8Sms {
    id: string;
    title: string;
    setting?: Iwe8SmsSetting;
    open?: boolean;
    order?: number;
    schema?: SFSchema;
    ui?: SFUISchema;
    link?: string;
}

export interface State extends EntityState<Iwe8Sms> {

}

export const adapter: EntityAdapter<Iwe8Sms> = createEntityAdapter({
    selectId: (item: Iwe8Sms) => item.id
});
export let initState: State = adapter.getInitialState();

const types: Iwe8Sms[] = [
    {
        id: 'aliyun', title: '阿里云',
        setting: {}, order: 1,
        open: true,
        link: "https://www.aliyun.com/",
        schema: {
            properties: {
                access_key_id: {
                    type: "string",
                    title: "keAccessKey IDy",
                    ui: {
                        spanLabel: 8,
                        spanControl: 16
                    }
                },
                access_key_secret: {
                    type: "string",
                    title: "Access Key Secret",
                    ui: {
                        spanLabel: 8,
                        spanControl: 16
                    }
                },
                sign_name: {
                    type: "string",
                    title: "签名名称",
                    description: "短信服务->签名管理",
                    ui: {
                        spanLabel: 8,
                        spanControl: 16
                    }
                }
            }
        },
        ui: {}
    },
    {
        id: 'yunpian', title: '云片',
        link: "https://www.yunpian.com/",
        schema: {
            properties: {
                api_key: {
                    type: "string",
                    title: "ApiKey"
                }
            }
        }, ui: {}
    },
    {
        id: 'submail', title: 'Submail',
        link: "https://www.mysubmail.com/",
        schema: {
            properties: {
                app_id: {
                    type: "string"
                },
                app_key: {
                    type: "string"
                },
                project: {
                    type: "string"
                }
            }
        }, ui: {}
    },
    {
        id: 'luosimao', title: '螺丝帽',
        link: "https://luosimao.com/", schema: {
            properties: {
                api_key: {
                    type: "string"
                }
            }
        }, ui: {}
    },
    {
        id: 'yuntongxun', title: '容联云通讯',
        link: "https://www.yuntongxun.com/", schema: {
            properties: {
                app_id: {
                    type: "string"
                },
                account_sid: {
                    type: "string"
                },
                account_token: {
                    type: "string"
                },
                is_sub_account: {
                    type: "boolean"
                }
            }
        }, ui: {}
    },
    {
        id: 'huyi', title: '互亿无线',
        link: "http://www.ihuyi.com/",
        schema: {
            properties: {
                api_id: {
                    type: "string"
                },
                api_key: {
                    type: "string"
                }
            }
        }, ui: {}
    },
    {
        id: 'juhe', title: '聚合数据', link: "",
        schema: {
            properties: {
                app_key: {
                    type: "string"
                }
            }
        }, ui: {}
    },
    {
        id: 'sendcloud', title: 'SendCloud',
        link: "https://www.sendcloud.net/", schema: {
            properties: {
                sms_user: {
                    type: "string"
                },
                sms_key: {
                    type: "string"
                },
                timestamp: {
                    type: "boolean"
                }
            }
        }, ui: {}
    },
    {
        id: "baidu", title: '百度云',
        link: "https://cloud.baidu.com/",
        schema: {
            properties: {
                ak: {
                    type: "string"
                },
                sk: {
                    type: "string"
                },
                invoke_id: {
                    type: "string"
                },
                domain: {
                    type: "string"
                }
            }
        }, ui: {}
    },
    {
        id: "huaxin", title: '华信短信平台',
        link: "", schema: {
            properties: {
                user_id: {
                    type: "string"
                },
                password: {
                    type: "string"
                },
                account: {
                    type: "string"
                },
                ip: {
                    type: "string"
                },
                ext_no: {
                    type: "string"
                },
            }
        }, ui: {}
    },
    {
        id: "chuanglan", title: '253云通讯（创蓝）',
        link: "",
        schema: {
            properties: {
                account: {
                    type: "string"
                },
                password: {
                    type: "string"
                },
                // channel: {
                //     type: "string"
                // },
                sign: {
                    type: "string"
                },
                unsubscribe: {
                    type: "string"
                },
            }
        }, ui: {}
    },
    {
        id: "rongcloud", title: '融云', link: "",
        schema: {
            properties: {
                app_key: {
                    type: "string"
                },
                app_secret: {
                    type: "string"
                }
            }
        }, ui: {}
    },
    {
        id: "twilio", title: 'twilio', link: "", schema: {
            properties: {
                account_sid: {
                    type: "string"
                },
                from: {
                    type: "string"
                },
                token: {
                    type: "string"
                }
            }
        }, ui: {}
    },
    {
        id: "tianyiwuxian", title: '天毅无线', link: "", schema: {
            properties: {
                username: {
                    type: "string"
                },
                password: {
                    type: "string"
                },
                gwid: {
                    type: "string"
                },
            }
        }, ui: {}
    },
    {
        id: "qcloud", title: '腾讯云 SMS', link: "", schema: {
            properties: {
                sdk_app_id: {
                    type: "string"
                },
                app_key: {
                    type: "string"
                }
            }
        }, ui: {}
    },
    {
        id: "avatardata", title: '阿凡达数据', link: "", schema: {
            properties: {
                app_key: {
                    type: "string"
                }
            }
        }, ui: {}
    }
];

initState = adapter.addAll(types, initState);

export function reducer(
    state: State = initState,
    action: any
) {
    switch (action.type) {
        case "InitSms": {
            return adapter.addAll(action.payload, state);
        }
        default: {
            return state;
        }
    }
}
export const pcSelector: MemoizedSelector<any, any> = createFeatureSelector('pc');
export const smsSelector: MemoizedSelector<any, State> = createSelector(
    pcSelector,
    (state: any) => state.sms
);
export const smsAllSelector: MemoizedSelector<State, Iwe8Sms[]> = createSelector(
    smsSelector,
    adapter.getSelectors().selectAll
);
