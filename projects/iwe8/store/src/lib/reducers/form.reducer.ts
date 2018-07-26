// 保存表单的值

export interface State {
    [key: string]: any
}

export const initState: State = {
    name: {
        name1: {
            name10: {},
            name11: {},
            name12: {},
        },
        name2: {
            name20: {},
            name21: {},
            name22: {},
        }
    }
};

export function reducer(
    state: State = initState,
    action: any
) {
    switch (action.type) {
        case "InitForm": {
            return { ...state, ...action.payload };
        }
        default: {
            return state;
        }
    }
}
