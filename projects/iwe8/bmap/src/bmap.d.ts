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
    export class Map implements EventTarget {
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
        addEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
        dispatchEvent(evt: Event): boolean;
        removeEventListener(type: string, listener?: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void;
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
        initialize(map: Map): HTMLElement;
        isVisible(): boolean;
        draw(): void;
        show(): void;
        hide(): void;
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
        getTilesUrl(tileCoord: Pixel, zoom: Number): string;
        getCopyright(): Copyright | null;
        isTransparentPng(): number;
    }
    export interface PredictDate {
        weekday: number;
        hour: number;
    }
    export interface TrafficLayerOptions {
        predictDate: PredictDate;
    }
    export class TrafficLayer {
        constructor(opts: TrafficLayerOptions);
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
        setPath(path: Array<Point>): void;
        getPath(): Point[];
        setStrokeColor(color: String): void;
        getStrokeColor(): string;
        setStrokeOpacity(opacity: Number): void;
        getStrokeOpacity(): number;
        setStrokeWeight(weight: Number): void;
        getStrokeWeight(): number;
        setStrokeStyle(style: String): void;
        getStrokeStyle(): string;
        getBounds(): Bounds;
        enableEditing(): void;
        disableEditing(): void;
        enableMassClear(): void;
        disableMassClear(): void;
        setPositionAt(index: Number, point: Point): void;
        getMap(): Map;
        addEventListener(event: String, handler: Function): void;
        removeEventListener(event: String, handler: Function): void;
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

    // Icon
    export interface IconOptions {
        anchor: Size;
        imageOffset: Size;
        infoWindowAnchor: Size;
        printImageUrl: string;
    }
    export class Icon {
        anchor: Size;
        size: Size;
        imageOffset: Size;
        imageSize: Size;
        infoWindowAnchor: Size;
        printImageUrl: string;
        imageUrl: string;
        constructor(url: String, size: Size, opts: IconOptions);
        setImageUrl(imageUrl: String): void;
        setSize(size: Size): void;
        setImageSize(offset: Size): void;
        setAnchor(anchor: Size): void;
        setImageOffset(offset: Size): void;
        setInfoWindowAnchor(anchor: Size): void;
        setPrintImageUrl(url: String): void;
    }

    // Animation
    export enum Animation {
        BMAP_ANIMATION_DROP,
        BMAP_ANIMATION_BOUNCE
    }

    // Marker
    export interface MarkerOptions {
        offset: Size;
        icon: Icon;
        enableMassClear: boolean;
        enableDragging: boolean;
        enableClicking: boolean;
        raiseOnDrag: boolean;
        draggingCursor: string;
        rotation: number;
        shadow: Icon;
        title: string;
    }
    export class Marker extends Overlay {
        constructor(point: Point, opts?: MarkerOptions);
        openInfoWindow(infoWnd: InfoWindow): void;
        closeInfoWindow(): void;
        setIcon(icon: Icon): void;
        getIcon(): Icon;
        setPosition(position: Point): void;
        getPosition(): Point;
        setOffset(offset: Size): void;
        getOffset(): Size;
        getLabel(): Label;
        setLabel(label: Label): void;
        setTitle(title: String): void;
        getTitle(): string;
        setTop(isTop: Boolean): void;
        enableDragging(): void;
        disableDragging(): void;
        enableMassClear(): void;
        disableMassClear(): void;
        setZIndex(zIndex: Number): void;
        getMap(): Map;
        addContextMenu(menu: ContextMenu): void;
        removeContextMenu(menu: ContextMenu): void;
        setAnimation(animation: Animation | null): void;
        setRotation(rotation: Number): void;
        getRotation(): number;
        setShadow(shadow: Icon): void;
        getShadow(): Icon;
        addEventListener(event: String, handler: Function): void;
        removeEventListener(event: String, handler: Function): void;
    }
    // Label
    export interface LabelOptions {
        offset: Size;
        position: Point;
        enableMassClear: boolean;
    }
    export class Label {
        constructor(content: String, opts: LabelOptions);
        setStyle(styles: Object): void;
        setContent(content: String): void;
        setPosition(position: Point): void;
        getPosition(): Point;
        setOffset(offset: Size): void;
        getOffset(): Size;
        setTitle(title: String): void;
        getTitle(): string;
        enableMassClear(): void;
        disableMassClear(): void;
        setZIndex(zIndex: Number): void;
        setPosition(position: Point): void;
        getMap(): Map;
        addEventListener(event: String, handler: Function): void;
        removeEventListener(event: String, handler: Function): void;
    }

    // Polygon
    export interface PolygonOptions {
        strokeColor: string;
        fillColor: string;
        strokeWeight: number;
        strokeOpacity: number;
        fillOpacity: number;
        strokeStyle: string;
        enableMassClear: boolean;
        enableEditing: boolean;
        enableClicking: boolean;
    }
    export class Polygon {
        constructor(points: Array<Point>, opts: PolygonOptions);
        setPath(path: Array<Point>): void;
        getPath(): Point[];
        setStrokeColor(color: String): void;
        getStrokeColor(): string;
        setFillColor(color: String): void;
        getFillColor(): string;
        setStrokeOpacity(opacity: Number): void;
        getStrokeOpacity(): number;
        setFillOpacity(opacity: Number): void;
        getFillOpacity(): number;
        setStrokeWeight(weight: Number): void;
        getStrokeWeight(): number;
        setStrokeStyle(style: String): void;
        getStrokeStyle(): string;
        getBounds(): Bounds;
        enableEditing(): void;
        disableEditing(): void;
        enableMassClear(): void;
        disableMassClear(): void;
        setPositionAt(index: Number, point: Point): void;
        getMap(): Map;
        addEventListener(event: String, handler: Function): void;
        removeEventListener(event: String, handler: Function): void;
    }

    // Circle
    export interface CircleOptions {
        strokeColor: string;
        fillColor: string;
        strokeWeight: number;
        strokeOpacity: number;
        fillOpacity: number;
        strokeStyle: string;
        enableMassClear: boolean;
        enableEditing: boolean;
        enableClicking: boolean;
    }
    export class Circle {
        constructor(center: Point, radius: Number, opts: CircleOptions);
        setCenter(center: Point): void;
        getCenter(): void;
        setRadius(radius: Number): void;
        getRadius(): number;
        getBounds(): Bounds;
        setStrokeColor(color: String): void;
        getStrokeColor(): void;
        setFillColor(color: String): void;
        getFillColor(): string;
        setStrokeOpacity(opacity: Number): void;
        getStrokeOpacity(): number;
        setFillOpacity(opacity: Number): void;
        getFillOpacity(): number;
        setStrokeWeight(weight: Number): void;
        getStrokeWeight(): number;
        setStrokeStyle(style: String): void;
        getStrokeStyle(): string;
        enableEditing(): void;
        disableEditing(): void;
        enableMassClear(): void;
        disableMassClear(): void;
        getMap(): Map;
        addEventListener(event: String, handler: Function): void;
        removeEventListener(event: String, handler: Function): void;
    }

    // GroundOverlay
    export interface GroundOverlayOptions {
        opacity: number;
        imageURL: string;
        displayOnMinLevel: number;
        displayOnMaxLevel: number;
    }
    export class GroundOverlay {
        constructor(bounds: Bounds, opts: GroundOverlayOptions);
        setBounds(bounds: Bounds): void;
        getBounds(): Bounds;
        setOpacity(opcity: Number): void;
        getOpacity(): number;
        setImageURL(url: String): void;
        getImageURL(): string;
        setDisplayOnMinLevel(level: Number): void;
        getDisplayOnMinLevel(): number;
        setDispalyOnMaxLevel(level: Number): void;
        getDispalyOnMaxLevel(): number;
    }

    // PointCollection
    export enum SizeType {
        BMAP_POINT_SIZE_TINY,
        BMAP_POINT_SIZE_SMALLER,
        BMAP_POINT_SIZE_SMALL,
        BMAP_POINT_SIZE_NORMAL,
        BMAP_POINT_SIZE_BIG,
        BMAP_POINT_SIZE_BIGGER,
        BMAP_POINT_SIZE_HUGE
    }
    export enum ShapeType {
        BMAP_POINT_SHAPE_CIRCLE,
        BMAP_POINT_SHAPE_STAR,
        BMAP_POINT_SHAPE_SQUARE,
        BMAP_POINT_SHAPE_RHOMBUS,
        BMAP_POINT_SHAPE_WATERDROP
    }
    export interface PointCollectionOptions {
        shape: ShapeType;
        color: string;
        size: SizeType;
    }
    export class PointCollection {
        constructor(points: Array<Point>, opts: PointCollectionOptions);
        setPoints(points: Array<Point>): void;
        setStyles(styles: PointCollectionOptions): void;
        clear(): void;
    }

    // Symbol
    export enum SymboShapeType {
        BMap_Symbol_SHAPE_CIRCLE,
        BMap_Symbol_SHAPE_RECTANGLE,
        BMap_Symbol_SHAPE_RHOMBUS,
        BMap_Symbol_SHAPE_STAR,
        BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW,
        BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW,
        BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW,
        BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW,
        BMap_Symbol_SHAPE_POINT,
        BMap_Symbol_SHAPE_PLANE,
        BMap_Symbol_SHAPE_CAMERA,
        BMap_Symbol_SHAPE_WARNING,
        BMap_Symbol_SHAPE_SMILE,
        BMap_Symbol_SHAPE_CLOCK
    }
    export interface SymbolOptions {
        anchor: Size;
        fillColor: string;
        fillOpacity: number;
        scale: number;
        rotation: number;
        strokeColor: string;
        strokeOpacity: number;
        strokeWeight: number;
    }
    export class Symbol {
        constructor(path: String | SymboShapeType, opts: SymbolOptions);
        setPath(path: string | SymboShapeType): void;
        setAnchor(anchor: Size): void;
        setRotation(rotation: number): void;
        setScale(scale: number): void;
        setStrokeWeight(strokeWeight: number): void;
        setStrokeColor(color: string): void;
        setStrokeOpacity(opacity: number): void;
        setFillOpacity(opacity: number): void;
        setFillColor(color: string): void;
    }
}

declare namespace mapv {
    export class DataSet {
        constructor();
        get(): any;
        set(): void;
    }
    export class baiduMapLayer {
        constructor(map: BMap.Map, dataSet: DataSet, options: any);
        update(): void;
        setOptions(): void;
        show(): void;
        hide(): void;
        destroy(): void;
    }
    export class utilDataRangeIntensity {
        constructor();
        getSize(): any;
        getColor(): any;
        setMax(max: number): void;
        setMaxSize(maxSize: number): void;
    }
}

declare namespace BMapLib {
    export const version: string;
    export interface IndoorOptions {
        buildingId: string;
        floor: string;
        minZoom: number;
        maxZoom: number;
        enableIndoor: boolean;
        showBaseMap: boolean;
        showIndoorControl: boolean;
        showLabel: boolean;
        autoShowIndoorControl: boolean;
        complete: Function;
        beforeChangeFloor: Function;
        afterChangeFloor: Function;
        indoorClick: Function;
        labelClick: Function;
        labelMouseOver: Function;
        labelMouseOut: Function;
        getPoiInfoOptions: GetPoiInfoOptions;
    }
    export interface GetPoiInfoOptions {
        onRequestComplete: Function;
        onRequestSuccess: Function;
        onRequestError: Function;
    }
    export class IndoorManager {
        constructor(map: BMap.Map, opts: IndoorOptions);
        enableIndoor(): void;
        disableIndoor(): void;
        getBuildingId(): string;
        setBuildingId(buildingId: String, opts: GetPoiInfoOptions): void;
        setIndoor(buildingId: String, floor: String, opts: GetPoiInfoOptions): void;
        getAllFloors(buildingId: String): string[];
        getFloor(): string;
        setFloor(floor: String): void;
        getMinZoom(): number;
        getMaxZoom(): number;
        showBaseMap(): void;
        hideBaseMap(): void;
        showIndoorController(): void;
        hideIndoorController(): void;
        showLabels(): void;
        hideLabels(): void;
        getPoiInfoByUid(uid: String, opts: GetPoiInfoOptions): void;
        setOptions(opts: IndoorOptions): void;
    }
    // HeatmapOverlay
    // 热力图
    // 提供热力图可视化展现功能，注: 支持chrome, safari, IE9及以上的浏览器.
    // 核心的代码主要来自于第三方heatmap.js, 主入口类是HeatmapOverlay。
    export interface HeatmapOverlayOptions {
        radius: string;
        visible: number;
        gradient: any;
        opacity: number;
    }
    export interface HeatmapOverlayData {
        max: number;
        data: {
            lng: number, lat: number, count: number
        }[];
    }
    export class HeatmapOverlay {
        constructor(opts: HeatmapOverlayOptions);
        addDataPoint(lng: number, lat: number, count: number): void;
        setDataSet(data: HeatmapOverlayData): void;
        setOptions(options: HeatmapOverlayOptions): void;
        toggle(): void;
    }
    // 城市商圈及行政区域
    // 城市行政区域和商圈数据获取工具类，
    // 使用者可以通过调用该接口智能获取城市行政区域和商圈多边形及相关坐标点数据。
    // 主入口类是CityList。
    export interface CityListOptions {
        container: string | HTMLElement;
        map: BMap.Map;
    }

    export interface CityListBusiness {
        city: string;
        coordinate: BMap.Point[];
        district: string;
        type: string;
    }
    export interface CityListArea {
        area_code: number;
        area_name: string;
        area_type: number;
        geo: any;
        sup_business_area: number;
        sub: any;
    }
    export class CityList {
        constructor(opts: CityListOptions);
        getBusiness(name: string, callback: (res: CityListBusiness) => any): void;
        getSubAreaList(name: string, callback: (res: CityListArea) => any): any;
        addEventListener(type: string, callback: Function): void;
        removeEventListener(type: string, callback: Function): void;
    }
    // 绘制弧线类
    // 提供绘制弧线功能的开源代码库，
    // 且用户可通过编辑功能（如开启拖拽起终点、线的宽度与颜色）绘制所需的弧线样式
    export class CurveLine extends BMap.Overlay {
        constructor(points: BMap.Point[], opts: BMap.PolylineOptions)
    }

    // 事件包装器
    // 百度地图API事件包装器类，对外开放。 对百度地图提供的事件机制，
    // 进行了包装，更好的提供事件绑定、删除体验。
    export interface MapsEventListener {

    }
    export class EventWrapper {
        constructor();
        addDomListener(element: HTMLElement, event: string, handler: Function): MapsEventListener;
        addDomListenerOnce(element: HTMLElement, event: string, handler: Function): MapsEventListener;
        addListener(instance: any, event: string, handler: Function): MapsEventListener;
        addListenerOnce(instance: any, event: string, handler: Function): MapsEventListener;
        clearInstanceListeners(instance: string): void;
        clearListeners(instance: any, event: string): void;
        removeListener(listener: any): void;
        trigger(instance: any, event: string, args: any): void;
    }

    // MarkerManager
    // 标注管理器
    // 百度地图的标注管理器。多marker的管理，更高效、解析更快。
    export interface MarkerManagerOptions {
        borderPadding: string;
        maxZoom: number;
        trackMarkers: boolean;
    }
    export class MarkerManager {
        constructor(map: BMap.Map, opts: MarkerManagerOptions);
        addMarker(marker: BMap.Marker, minZoom: number, maxZoom: number): void;
        addMarkers(markers: BMap.Marker[], minZoom: number, maxZoom: number): void;
        clearMarkers(): void;
        getMarkerCount(zoom: number): number;
        hide(): void;
        removeMarker(marker: BMap.Marker): void;
        show(): void;
        showMarkers(): void;
        toggle(marker: BMap.Marker): void;
    }

    // RichMarker
    // 富标注
    // 标注管理器
    // 百度地图的富Marker类，对外开放。 允许用户在自定义丰富的Marker展现，并添加点击、双击、拖拽等事件。
    export interface RichMarkerOptions {
        anchor: BMap.Size;
        enableDragging: boolean;
    }
    export class RichMarker {
        constructor(content: string | HTMLElement, position: BMap.Point, opts: RichMarkerOptions);
        disableDragging(): void;
        enableDragging(): void;
        getAnchor(): BMap.Size;
        getContent(): string | HTMLElement;
        getHeight(): number;
        getPosition(): BMap.Point;
        getWidth(): number;
        isDraggable(): boolean;
        setAnchor(anchor: BMap.Size): void;
        setContent(content: string | HTMLElement): void;
        setHeight(height: number): void;
        setPosition(position: BMap.Point): void;
        setWidth(width: number): void;
    }

    // LuShu
    export interface LuShuOptions {
        landmarkPois: landmarkPoi[];
        icon: BMap.Icon;
        speed: number;
        defaultContent: string;
        autoView: boolean;
        enableRotation: boolean;
    }
    export interface landmarkPoi {
        lng: number;
        lat: number;
        html: string;
        pauseTime: number;
    }
    export class LuShu {
        constructor(map: BMap.Map, path: BMap.Point[], opts: LuShuOptions);
        hideInfoWindow(): void;
        showInfoWindow(): void;
        pause(): void;
        start(): void;
        stop(): void;
    }

    // AreaRestriction
    export class AreaRestriction {
        constructor();
        clearBounds(): void;
        setBounds(map: BMap.Map, bounds: BMap.Bounds): void;
    }

    // SearchInRectangle
    export interface SearchInRectangleOptions {

    }
    export class SearchInRectangle {
        constructor(map: BMap.Map, keyword: string, opts: SearchInRectangleOptions);
        close(): void;
        getCursor(): string;
        localSearch(instance: SearchInRectangle): BMap.LocalSearch;
        open(): void;
        setCursor(cursor: string): void;
        setFillColor(color: string): void;
        setKeyword(keyword: string): void;
        setLineStroke(width: number): void;
        setLineStyle(style: any): void;
        setOpacity(opacity: number): void;
        setStrokeColor(color: string): void;
    }

    // RectangleZoom
    export interface RectangleZoomOptions {
        strokeWeight: number;
    }
    export class RectangleZoom {
        constructor(map: BMap.Map, opts: RectangleZoomOptions);
        close(): void;
        getCursor(): string;
        open(): void;
        setCursor(cursor: string): void;
        setFillColor(color: string): void;
        setLineStroke(width: number): void;
        setLineStyle(style: any): void;
        setOpacity(opacity: number): void;
        setStrokeColor(color: string): void;
    }


    export interface MarkerToolOptions {
        followText: string;
    }
    export class MarkerTool {
        constructor(map: BMap.Map, opts: MarkerToolOptions);
        close(): void;
        getIcon(): BMap.Icon;
        open(): void;
        setIcon(icon: BMap.Icon): void;
    }

    export interface TextIconOverlayOptions {
        styles: {
            url: string;
            size: BMap.Size;
            anchor: BMap.Size;
            offset: BMap.Size;
            textSize: number;
            textColor: string;
        }[];
    }

    export class TextIconOverlay {
        constructor(position: BMap.Point, text: string, options: TextIconOverlayOptions);
        draw(): void;
        getPosition(): BMap.Point;
        getStyleByText(text, styles): number;
        getText(): string;
        initialize(map: BMap.Map): void;
        setPosition(position: BMap.Point): void;
        setText(text: string): void;
    }
}
