import { Iwe7Map } from './../interfaces/map.interface';
export abstract class Iwe7MapAbstract implements Iwe7Map {
    // 加载地图脚本
    abstract load(): void;
    // 获取当前位置
    abstract getCurrentPosition(): any;
    // 创建地图
    abstract createMap(): any;
}
