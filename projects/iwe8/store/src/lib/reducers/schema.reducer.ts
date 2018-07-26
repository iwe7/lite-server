// 保存表单的规则

export interface State {
    [key: string]: any
}

export const initState: State = {
    type: "object",
    properties: {
        name: {
            type: "object",
            selector: "widget-string",
            properties: {
                name1: {
                    type: "object",
                    selector: "widget-string",
                    properties: {
                        name10: {
                            type: "object",
                            selector: "widget-string",
                            properties: {

                            }
                        },
                        name11: {
                            type: "object",
                            selector: "widget-string",
                            properties: {

                            }
                        },
                        name12: {
                            type: "object",
                            selector: "widget-string",
                            properties: {

                            }
                        }
                    }
                },
                name2: {
                    type: "object",
                    selector: "widget-string",
                    properties: {
                        name20: {
                            type: "object",
                            selector: "widget-string",
                            properties: {

                            }
                        },
                        name21: {
                            type: "object",
                            selector: "widget-string",
                            properties: {

                            }
                        },
                        name22: {
                            type: "object",
                            selector: "widget-string",
                            properties: {

                            }
                        }
                    }
                },
            }
        }
    },
    selector: "widget-string",
};

export function reducer(
    state: State = initState,
    action: any
) {
    switch (action.type) {
        case "InitSchema": {
            return { ...state, ...action.payload };
        }
        default: {
            return state;
        }
    }
}
