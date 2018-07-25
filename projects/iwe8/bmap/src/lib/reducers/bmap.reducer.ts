
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

    // 点击
    click: any;
    moveend: any;
    dragend: any;
    moving: any;
    // 当前中心店
    point: BMap.Point;
    pointMarker: BMap.Marker;
    // Geocoder
    geocoderResult: BMap.GeocoderResult
}

export const initState: State = {
    loaded: false,
    options: {
        zoom: 18
    },
    map: null,
    point: null,
    currentPosition: null,
    localSearchResult: null,
    searchKeys: [],
    click: null,
    moveend: null,
    moving: null,
    dragend: null,
    geocoderResult: null,
    pointMarker: null
};

export function reducer(
    state: State = initState,
    action: any
) {
    switch (action.type) {
        case "BMapSetPoint": {
            state = { ...state, point: action.payload };
            state.map.setCenter(state.point);
            return state;
        }
        case "RemoveMap": {
            return { ...state, map: null, moveend: null, moving: null };
        }
        case "BMapLoaded": {
            return { ...state, loaded: true };
        }
        case "BMapClick": {
            return { ...state, click: action.payload };
        }
        case "BMapMoveend": {
            const point = state.map.getCenter();
            state.point = point;
            return { ...state, moveend: action.payload };
        }
        case "BMapMoving": {
            state.point = state.map.getCenter();
            return { ...state, moving: action.payload };
        }
        case "BMapDragend": {
            // state.point = state.map.getCenter();
            // return { ...state, dragend: action.payload };
            return state;
        }
        case "BMapSetGeocoderResult": {
            return { ...state, geocoderResult: action.payload };
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
