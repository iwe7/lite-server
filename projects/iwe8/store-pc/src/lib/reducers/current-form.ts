export interface State {
    [key: string]: any;
}

export const initState = {};

export function reducer(
    state: State = initState,
    action: any
) {
    switch (action.type) {
        case "InitCurrentForm": {
            return { ...action.payload };
        }
        case "UpdateCurrentForm": {
            return { ...state, ...action.payload }
        }
        default: {
            return state;
        }
    }
}
