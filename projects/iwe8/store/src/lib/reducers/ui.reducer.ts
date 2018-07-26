// 保存表单的ui

export interface State {
    [key: string]: any
}

export const initState: State = {};

export function reducer(
    state: State = initState,
    action: any
) {
    switch (action.type) {
        case "InitUi": {
            return { ...state, ...action.payload };
        }
        default: {
            return state;
        }
    }
}
