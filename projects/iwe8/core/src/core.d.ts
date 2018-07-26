declare interface Window {
    iwe8: {
        global: Iwe8.Global
    }
}

export namespace Iwe8 {
    export const version: string;
    export const global: Global;
    export interface Global {
        get(name: string): any;
        set(name: string, item: any): void;
    }
}

declare const iwe8: {
    version: string;
    global: Iwe8.Global;
}
