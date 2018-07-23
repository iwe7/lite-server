declare namespace BMap {
    export interface MapOptions {
        // 地图允许展示的最小级别
        minZoom?: number;
        // 地图允许展示的最大级别
        maxZoom?: number;
        // 地图类型，默认为BMAP_NORMAL_MAP
        mapType?: any;
        // 是否启用使用高分辨率地图。在iPhone4及其后续设备上，
        // 可以通过开启此选项获取更高分辨率的底图，v1.2,v1.3版本默认不开启，
        // v1.4默认为开启状态
        enableHighResolution?: boolean;
        // 是否自动适应地图容器变化，默认启用
        enableAutoResize?: boolean;
        // 是否开启底图可点功能，默认启用
        enableMapClick?: boolean;
    }
    export interface PanoramaOptions { }
    export class Panorama {
        constructor(container: String | HTMLElement, opts: PanoramaOptions);
    }
    export class Bounds {
        constructor(sw: Point, ne: Point);
        equals(other: Bounds): boolean;
        containsPoint(point: Point): boolean;
        containsBounds(bounds: Bounds): boolean;
        intersects(other: Bounds): Bounds;
        extend(point: Point): void;
        getCenter(): Point;
        isEmpty(): boolean;
        getSouthWest(): Point;
        getNorthEast(): Point;
        toSpan(): Point;
    }
    export interface Viewport {
        center?: Point;
        zoom?: number;
    }
    export interface ViewportOptions {
        enableAnimation?: boolean;
        margins?: number[];
        zoomFactor?: number;
        delay?: number;
    }
    export interface PanOptions {
        noAnimation?: boolean;
    }
    export interface MapTypeOptions {
        minZoom: number;
        maxZoom: number;
        errorImageUrl: string;
        textColor: number;
        tips: string;
    }
    export class Map {
        constructor(container: String | HTMLElement, opts?: MapOptions);
        enableDragging(): void;
        disableDragging(): void;
        enableScrollWheelZoom(): void;
        disableScrollWheelZoom(): void;
        enableDoubleClickZoom(): void;
        disableDoubleClickZoom(): void;
        enableKeyboard(): void;
        disableKeyboard(): void;
        enableInertialDragging(): void;
        disableInertialDragging(): void;
        enableContinuousZoom(): void;
        disableContinuousZoom(): void;
        enablePinchToZoom(): void;
        disablePinchToZoom(): void;
        enableAutoResize(): void;
        disableAutoResize(): void;
        setDefaultCursor(cursor: string): void;
        getDefaultCursor(): string;
        setDraggingCursor(cursor: String): void;
        getDraggingCursor(): string;
        setMinZoom(zoom: Number): void;
        setMaxZoom(zoom: Number): void;
        setMapStyle(): void;
        setPanorama(pano: Panorama): void;
        getBounds(): Bounds;
        getCenter(): Point;
        getDistance(start: Point, end: Point): number;
        getMapType(): MapType;
        getSize(): Size;
        getViewport(view: Array<Point>, viewportOptions: ViewportOptions): Viewport;
        getZoom(): number;
        getPanorama(): Panorama;
        centerAndZoom(center: Point, zoom: Number): void;
        panTo(center: Point, opts?: PanOptions): void;
        panBy(x: Number, y: Number, opts: PanOptions): void;
        reset(): void;
        setCenter(center: Point | String): void;
        setCurrentCity(city: String): void;
        setMapType(mapType: MapTypes): void;
        setViewport(view: Array<Point> | Viewport, viewportOptions: ViewportOptions): void;
        setZoom(zoom: Number): void;
        highResolutionEnabled(): boolean;
        zoomIn(): void;
        zoomOut(): void;
        addHotspot(hotspot: Hotspot): void;
        removeHotspot(hotspot: Hotspot): void;
        clearHotspots(): void;
        addControl(control: Control): void;
        removeControl(control: Control): void;
        getContainer(): HTMLElement;
        addContextMenu(menu: ContextMenu): void;
        removeContextMenu(menu: ContextMenu): void;
        addOverlay(overlay: Overlay): void;
        removeOverlay(overlay: Overlay): void;
        clearOverlays(): void;
        openInfoWindow(infoWnd: InfoWindow, point: Point): void;
        closeInfoWindow(): void;
        pointToOverlayPixel(point: Point): Point;
        overlayPixelToPoint(pixel: Pixel): Point;
        getInfoWindow(): InfoWindow | null;
        getOverlays(): Array<Overlay>;
        getPanes(): MapPanes;
        addTileLayer(tileLayer: TileLayer): void;
        removeTileLayer(tileLayer: TileLayer): void;
        getTileLayer(mapType: String): TileLayer;
        pixelToPoint(pixel: Pixel): Point;
        pointToPixel(point: Point): Pixel;
    }
    export enum ControlAnchor {
        BMAP_ANCHOR_TOP_LEFT,
        BMAP_ANCHOR_TOP_RIGHT,
        BMAP_ANCHOR_BOTTOM_LEFT,
        BMAP_ANCHOR_BOTTOM_RIGHT
    }
    export class Control {
        defaultAnchor: ControlAnchor;
        defaultOffset: Size;
        constructor();
        initialize(map: Map): HTMLElement;
        setAnchor(anchor: ControlAnchor): void;
        getAnchor(): ControlAnchor;
        setOffset(offset: Size): void;
        getOffset(): Size;
        show(): void;
        hide(): void;
        isVisible(): boolean;
    }

    export interface HotspotOptions {
        text: string;
        offsets: number[];
        userData: any;
        minZoom: number;
        maxZoom: number;
    }
    export class Hotspot {
        constructor(position: Point, options: HotspotOptions);
        getPosition(): Point;
        setPosition(position: Point): void;
        getText(): string;
        setText(text: String): void;
        getUserData(): any;
        setUserData(data: any): void;
    }

    export enum ContextMenuIcon {
        BMAP_CONTEXT_MENU_ICON_ZOOMIN,
        BMAP_CONTEXT_MENU_ICON_ZOOMOUT
    }

    export interface MenuItemOptions {
        width: number;
        id: string;
        iconUrl: string | ContextMenuIcon;
    }

    export class MenuItem {
        constructor(text: String, callback: Function, opts: MenuItemOptions);
    }
    export class ContextMenu {
        constructor();
        addItem(item: MenuItem): void;
        getItem(index: Number): MenuItem;
        removeItem(item: MenuItem): void;
        addSeparato(): void;
        removeSeparator(index: Number): void;
    }

    export interface InfoWindowOptions {
        width: number;
        height: number;
        maxWidth: number;
        offset: Size;
        title: string;
        enableAutoPan: boolean;
        enableCloseOnClick: boolean;
        enableMessage: boolean;
        message: string;
    }
    export class InfoWindow {
        constructor(content: String | HTMLElement, opts: InfoWindowOptions);
        setWidth(width: Number): void;
        setHeight(height: Number): void;
        redraw(): void;
        setTitle(title: String | HTMLElement): void;
        getTitle(): string | HTMLElement;
        setContent(content: String | HTMLElement): void;
        getContent(): string | HTMLElement;
        getPosition(): Point;
        enableMaximize(): void;
        disableMaximize(): void;
        isOpen(): boolean;
        setMaxContent(content: String): void;
        maximize(): void;
        restore(): void;
        enableAutoPan(): void;
        disableAutoPan(): void;
        enableCloseOnClick(): void;
        disableCloseOnClick(): void;
        addEventListener(event: String, handler: Function): void;
        removeEventListener(event: String, handler: Function): void;
    }

    export abstract class Overlay {
        abstract initialize(map: Map): HTMLElement;
        abstract isVisible(): boolean;
        abstract draw(): void;
        abstract show(): void;
        abstract hide(): void;
    }

    export interface MapPanes {
        floatPane: HTMLElement;
        markerMouseTarget: HTMLElement;
        floatShadow: HTMLElement;
        labelPane: HTMLElement;
        markerPane: HTMLElement;
        markerShadow: HTMLElement;
        mapPane: HTMLElement;
    }

    export class Pixel {
        public x: number;
        public y: number;
        constructor(x: number, y: number);
        // 判断坐标点是否相等，当且仅当两点的x坐标和y坐标均相等时返回true
        equals(other: Pixel): boolean;
    }

    export class Point {
        public lat: number;
        public lng: number;
        constructor(lng: number, lat: number);
        // 判断坐标点是否相等，当且仅当两点的经度和纬度均相等时返回true
        equals(other: Point): boolean;
    }

    export class Size {
        public width: number;
        public height: number;
        constructor(width: number, height: number);
        equals(other: Size): boolean;
    }
    export interface Copyright {
        id: number;
        content: string;
        bounds: Bounds;
    }
    export interface TileLayerOptions {
        transparentPng: boolean;
        tileUrlTemplate: string;
        copyright: Copyright;
        zIndex: number;
    }
    export class TileLayer {
        constructor(opts: TileLayerOptions);
    }
    export interface Projection {
        lngLatToPoint(lngLat: Point): Pixel;
        pointToLngLat(point: Pixel): Point;
    }
    export type MapTypes = MapType[];
    export class MapType {
        constructor(name: String, layers: TileLayer | Array<TileLayer>, options: MapTypeOptions);
        getName(): string;
        getTileLayer(): TileLayer;
        getMinZoom(): number;

        getMaxZoom(): number;
        getProjection(): Projection;
        getTextColor(): string;
        getTips(): string;
    }

    // localsearch
    export interface LocalRenderOptions { }
    export interface LocalSearchOptions {
        renderOptions?: LocalRenderOptions;
        onMarkersSet?: Function;
        onInfoHtmlSet?: Function;
        onResultsHtmlSet?: Function;
        pageCapacity?: number;
        onSearchComplete?: (res: LocalResult) => any;
    }
    export interface LocalResult {
        keyword: string;
        center: LocalResultPoi;
        radius: number;
        bounds: Bounds;
        city: string;
        moreResultsUrl: string;
        province: string;
        suggestions: string[];

        getPoi(i: Number): LocalResultPoi;
        getCurrentNumPois(): number;
        getNumPois(): number;
        getNumPages(): number;
        getPageIndex(): number;
        getCityList(): { city: string, numResults: number }[];
    }
    export enum PoiType {
        BMAP_POI_TYPE_NORMAL,
        BMAP_POI_TYPE_BUSSTOP,
        BMAP_POI_TYPE_SUBSTOP
    }
    export interface LocalResultPoi {
        title: string;
        point: Point;
        url: string;
        address: string;
        city: string;
        phoneNumber: string;
        postcode: string;
        type: PoiType;
        isAccurate: boolean;
        province: string;
        tags: string[];
        detailUrl: string;
    }
    export class LocalSearch {
        constructor(location: Map | Point | String, opts: LocalSearchOptions);
        search(keyword: String | Array<String>, option?: Object): void;
        searchInBounds(keyword: String | Array<String>, bounds: Bounds, option: Object): void;
        searchNearby(keyword: String | Array<String>, center: LocalResultPoi | String | Point, radius: Number, option: Object): void;
        getResults(): LocalResult | Array<LocalResult>;
        clearResults(): void;
        gotoPage(page: Number): void;
        enableAutoViewport(): void;
        disableAutoViewport(): void;
        enableFirstResultSelection(): void;
        disableFirstResultSelection(): void;
        setLocation(location: Map | Point | String): void;
        setPageCapacity(): void;
        getPageCapacity(): number;
        setSearchCompleteCallback(): void;
        setMarkersSetCallback(callback: Function): void;
        setInfoHtmlSetCallback(callback: Function): void;
        setResultsHtmlSetCallback(callback: Function): void;
        getStatus(): StatusCode;
    }
    // WalkingRoute
    export enum HighlightModes {
        BMAP_HIGHLIGHT_STEP,
        BMAP_HIGHLIGHT_ROUTE
    }
    export interface RenderOptions {
        map?: Map;
        panel?: string | HTMLElement;
        selectFirstResult?: boolean;
        autoViewport?: boolean;
        highlightMode?: HighlightModes;
    }
    export interface WalkingRouteOptions {
        renderOptions: RenderOptions;
        onSearchComplete: Function;
        onMarkersSet: Function;
        onPolylinesSet: Function;
        onInfoHtmlSet: Function;
        onResultsHtmlSet: Function;
    }
    export interface Step {
        getPosition(): Point;
        getIndex(): number;
        getDescription(includeHtml: Boolean): string;
        getDistance(format: Boolean): string | number;
    }
    export class IconSequence {
        constructor(symbol: Symbol, offset: string, repeat: string, fixedRotation: boolean);
    }
    export interface PolylineOptions {
        strokeColor: string;
        strokeWeight: number;
        strokeOpacity: number;
        strokeStyle: string;
        enableMassClear: boolean;
        enableEditing: boolean;
        enableClicking: boolean;
        icons: IconSequence[];
    }
    export class Polyline {
        constructor(points: Array<Point>, opts: PolylineOptions);
    }
    export enum RouteType {
        BMAP_ROUTE_TYPE_DRIVING,
        BMAP_ROUTE_TYPE_WALKING
    }
    export interface Route {
        getNumSteps(): number;
        getStep(i: Number): Step;
        getDistance(format: Boolean): string | number;
        getIndex(): number;
        getPolyline(): Polyline;
        getPath(): Point[];
        getRouteType(): RouteType;
    }
    export interface RoutePlan {
        getNumRoutes(): number;
        getRoute(i: Number): Route;
        getDistance(format: Boolean): string | number;
        getDuration(format: Boolean): string | number;
        getDragPois(): LocalResultPoi[];
    }
    export interface WalkingRouteResult {
        getStart(): LocalResultPoi;
        getEnd(): LocalResultPoi;
        getNumPlans(): number;
        getPlan(i: Number): RoutePlan;
    }
    export class WalkingRoute {
        constructor(location: Map | Point | String, opts: WalkingRouteOptions);
        search(start: String | Point | LocalResultPoi, end: String | Point | LocalResultPoi): void;
        getResults(): WalkingRouteResult;
        clearResults(): void;
        enableAutoViewport(): void;
        disableAutoViewport(): void;
        setLocation(location: Map | Point | String): void;
        setSearchCompleteCallback(callback: Function): void;
        setMarkersSetCallback(callback: Function): void;
        setInfoHtmlSetCallback(callback: Function): void;
        setPolylinesSetCallback(callback: Function): void;
        setResultsHtmlSetCallback(callback: Function): void;
        getStatus(): StatusCode;
        toString(): string;
    }

    // TransitRoute
    export enum TransitPolicy {
        BMAP_TRANSIT_POLICY_LEAST_TIME,
        BMAP_TRANSIT_POLICY_LEAST_TRANSFER,
        BMAP_TRANSIT_POLICY_LEAST_WALKING,
        BMAP_TRANSIT_POLICY_AVOID_SUBWAYS
    }
    export interface TransitRouteOptions {
        renderOptions: RenderOptions;
        policy: TransitPolicy;
        pageCapacity: number;
        onSearchComplete: Function;
        onMarkersSet: Function;
        onInfoHtmlSet: Function;
        onPolylinesSet: Function;
        onResultsHtmlSet: Function;
    }
    export enum LineType {
        BMAP_LINE_TYPE_BUS,
        BMAP_LINE_TYPE_SUBWAY,
        BMAP_LINE_TYPE_FERRY
    }
    export interface Line {
        title: string;
        type: LineType;
        getNumViaStops(): number;
        getGetOnStop(): LocalResultPoi;
        getGetOffStop(): LocalResultPoi;
        getPath(): Point[];
        getPolyline(): Polyline;
        getDistance(format: Boolean): string | number;
    }
    export interface TransitRoutePlan {
        getNumLines(): number;
        getLine(i: Number): Line;
        getNumRoutes(): number;
        getRoute(i: Number): Route;
        getDistance(format: Boolean): number | string;
        getDuration(format: Boolean): string | number;
        // 返回方案描述文本，默认包含HTML标签。当includeHtml为false时，方案描述不包含HTML标签
        getDescription(includeHtml: Boolean): String;
    }
    export interface TransitPolices { }
    export interface TransitRouteResult {
        policy: TransitPolices;
        city: string;
        moreResultsUrl: string;
        getStart(): LocalResultPoi;
        getEnd(): LocalResultPoi;
        getNumPlans(): number;
        // 返回索引指定的方案。索引0表示第一条方案
        getPlan(i: Number): TransitRoutePlan;
    }
    export class TransitRoute {
        constructor(location: Map | Point | String, opts: TransitRouteOptions);
        search(start: String | Point | LocalResultPoi, end: String | Point | LocalResultPoi): void;
        getResults(): TransitRouteResult;
        clearResults(): void;
        enableAutoViewport(): void;
        disableAutoViewport(): void;
        setPageCapacity(capacity: Number): void;
        setLocation(location: Map | Point | String): void;
        setPolicy(policy: TransitPolicy): void;
        setSearchCompleteCallback(callback: Function): void;
        setMarkersSetCallback(callback: Function): void;
        setInfoHtmlSetCallback(callback: Function): void;
        setPolylinesSetCallback(callback: Function): void;
        setResultsHtmlSetCallback(callback: Function): void;
        getStatus(): StatusCode;
        toString(): string;
    }

    // DrivingRoute
    export enum DrivingPolicy {
        BMAP_DRIVING_POLICY_LEAST_TIME,
        BMAP_DRIVING_POLICY_LEAST_DISTANCE,
        BMAP_DRIVING_POLICY_AVOID_HIGHWAYS
    }
    export interface DrivingRouteOptions {
        renderOptions: RenderOptions;
        policy: DrivingPolicy;
        onSearchComplete: Function;
        onMarkersSet: Function;
        onInfoHtmlSet: Function;
        onPolylinesSet: Function;
        onResultsHtmlSet: Function;
    }
    export interface TaxiFareDetail {
        initialFare: number;
        unitFare: number;
        totalFare: number;
    }
    export interface TaxiFare {
        day: TaxiFareDetail;
        night: TaxiFareDetail;
        distance: number;
        remark: string;
    }
    export interface DrivingRouteResult {
        policy: DrivingPolicy;
        city: string;
        moreResultsUrl: string;
        taxiFare: TaxiFare;
        getStart(): LocalResultPoi;
        getEnd(): LocalResultPoi;
        getNumPlans(): Number;
        getPlan(i: Number): RoutePlan;
    }
    export class DrivingRoute {
        constructor(location: Map | Point | String, opts: DrivingRouteOptions);
        search(start: String | Point | LocalResultPoi, end: String | Point | LocalResultPoi, options: object): void;
        getResults(): DrivingRouteResult;
        clearResults(): void;
        enableAutoViewport(): void;
        disableAutoViewport(): void;
        setLocation(location: Map | Point | String): void;
        setPolicy(policy: DrivingPolicy): void;
        setSearchCompleteCallback(callback: Function): void;
        setMarkersSetCallback(callback: Function): void;
        setInfoHtmlSetCallback(callback: Function): void;
        setPolylinesSetCallback(callback: Function): void;
        setResultsHtmlSetCallback(callback: Function): void;
        getStatus(): StatusCode;
        toString(): string;
    }

    // Geocoder
    export interface GeocoderResult {
        point: Point;
        address: string;
        addressComponents: AddressComponent;
        surroundingPois: LocalResultPoi[];
        business: string;
    }
    export interface AddressComponent {
        streetNumber: string;
        street: string;
        district: string;
        city: string;
        province: string;
    }
    export interface LocationOptions {
        poiRadius: number;
        numPois: number;
    }
    export class Geocoder {
        constructor();
        getPoint(address: String, callback: (point: Point) => any, city: String): void;
        getLocation(point: Point, callback: (res: GeocoderResult) => any, options?: LocationOptions): void;
    }

    // LocalCity
    export interface LocalCityOptions {
        renderOptions: RenderOptions;
    }
    export interface LocalCityResult {
        center: Point;
        level: number;
        name: string;
    }
    export class LocalCity {
        constructor(opts: LocalCityOptions);
        get(callback: (res: LocalCityResult) => any): void;
    }

    // Geolocation
    export interface GeolocationResult {
        point: Point;
        accuracy: number;
    }
    export interface PositionOptions {
        enableHighAccuracy?: boolean;
        maximumAge?: number;
        timeout?: number;
    }
    export class Geolocation {
        constructor();
        getCurrentPosition(callback: (res: GeolocationResult) => any, options: PositionOptions);
        getStatus(): StatusCode;
        enableSDKLocation(): void;
        disableSDKLocation(): void;
    }
    export enum StatusCode {
        BMAP_STATUS_SUCCESS = 0,
        BMAP_STATUS_CITY_LIST = 1,
        BMAP_STATUS_UNKNOWN_LOCATION = 2,
        BMAP_STATUS_UNKNOWN_ROUTE = 3,
        BMAP_STATUS_INVALID_KEY = 4,
        BMAP_STATUS_INVALID_REQUEST = 5,
        BMAP_STATUS_PERMISSION_DENIED = 6,
        BMAP_STATUS_SERVICE_UNAVAILABLE = 7,
        BMAP_STATUS_TIMEOUT = 8
    }

    // BusLineSearch
    export interface BusLineSearchOptions {
        renderOptions: RenderOptions;
        onGetBusListComplete: Function;
        onGetBusLineComplete: Function;
        onBusListHtmlSet: Function;
        onBusLineHtmlSet: Function;
        onPolylinesSet: Function;
        onMarkersSet: Function;
    }
    export interface BusListItem {
        name: string;
    }
    export interface BusListResult {
        keyword: string;
        city: string;
        moreResultsUrl: string;
        getNumBusList(): number;
        // 	获取某一个具体的公交列表中的对象。0表示上行，1表示下行
        getBusListItem(i: number): BusListItem;
    }
    export class BusLineSearch {
        constructor(location: Map | Point | String, options: BusLineSearchOptions);
        getBusList(keyword: String): void;
        getBusLine(busLstItem: BusListItem): void;
        clearResults(): void;
        enableAutoViewport(): void;
        disableAutoViewport(): void;
        setLocation(location: Map | Point | String): void;
        getStatus(): StatusCode;
        toString(): string;
        setGetBusListCompleteCallback(callback: Function);
        setGetBusLineCompleteCallback(callback: Function);
        setBusListHtmlSetCallback(callback: Function);
    }
    // Boundary
    export class Boundary {
        constructor();
        //返回行政区域的边界。 name: 查询省、直辖市、地级市、或县的名称。 callback:执行查询后，数据返回到客户端的回调函数，数据以回调函数的参数形式返回。返回结果是一个数组，数据格式如下： arr[0] = "x1, y1; x2, y2; x3, y3; ..." arr[1] = "x1, y1; x2, y2; x3, y3; ..." arr[2] = "x1, y1; x2, y2; ..." … 否则回调函数的参数为null
        get(name: String, callback: Function): void;
    }
    // Convertor
    export class Convertor {
        constructor();
        translate(points: Array<BMap.Point>, from: number, to: number, callback: Function): void;
    }
    // Autocomplete
    export interface AutocompleteOptions {
        location?: String | Map | Point;
        types?: string[];
        onSearchComplete?: (res: AutocompleteResultPoi) => any;
        input?: string | HTMLElement;
    }
    export interface AutocompleteResultPoi {
        province: string;
        city: string;
        district: string;
        street: string;
        streetNumber: string;
        business: string;
    }
    export interface AutocompleteResult {
        keyword: string;
        getPoi(i: Number): AutocompleteResultPoi;
        getNumPois(): number;
    }
    export class Autocomplete {
        constructor(options: AutocompleteOptions);
        show(): void;
        hide(): void;
        setTypes(types: string[]): void;
        setLocation(location: String | Map | Point): void;
        search(keywords: string): void;
        getResults(): AutocompleteResult;
        setInputValue(keyword: string): void;
        dispose(): void;
    }
}
