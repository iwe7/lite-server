export interface State {
    loaded: boolean;
    options: {
        zoom: number;
    },
    map: BMap.Map;
    // 当前位置
    currentPosition: BMap.GeolocationResult;
    // 搜索结果
    localSearchResult: BMap.LocalResult;
    // 搜索关键字
    searchKeys: string[];
}

export const initState: State = {
    loaded: false,
    options: {
        zoom: 18
    },
    map: null,
    currentPosition: null,
    localSearchResult: null,
    searchKeys: []
};

export function reducer(
    state: State = initState,
    action: any
) {
    switch (action.type) {
        case "BMapLoaded": {
            return { ...state, loaded: true };
        }
        case "SetMap": {
            return { ...state, map: action.payload };
        }
        case "SetCurrentPosition": {
            state = { ...state, currentPosition: action.payload };
            state.map.centerAndZoom(state.currentPosition.point, state.options.zoom);
            return state;
        }
        case "BMapLocalSearchSuccess": {
            state = { ...state, localSearchResult: action.payload };
            return state;
        }
        case "SetSearchKeys": {
            state = { ...state, searchKeys: action.payload };
            return state;
        }
        default: {
            return state;
        }
    }
}
