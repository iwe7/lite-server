import { SFSchema, SFUISchema } from '@delon/form';
export interface PIwe8aymentSetting {
    app_id: string;
    mch_id: string;
    key: string;
    cert_path: string;
    key_path: string;
    notify_url: string;
}

export interface State {
    setting: PIwe8aymentSetting;
    schema: SFSchema;
    ui: SFUISchema;
}

export const initState: State = {
    setting: {
        app_id: "",
        mch_id: "",
        key: "",
        cert_path: "",
        key_path: "",
        notify_url: ""
    },
    schema: {
        properties: {
            app_id: {
                type: "string"
            },
            mch_id: {
                type: "string"
            },
            key: {
                type: "string"
            },
            cert_path: {
                type: "string"
            },
            key_path: {
                type: "string"
            },
            notify_url: {
                type: "string"
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
