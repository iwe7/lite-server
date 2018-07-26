import { Injectable } from '@angular/core';
@Injectable({
    providedIn: "root",
    useFactory: () => {
        window['iwe8'] = window['iwe8'] || {
            version: "1.0"
        } as any;
        window['iwe8']['global'] = window['iwe8']['global'] || new CoreGlobalService();
        return window['iwe8']['global'];
    }
})
export class CoreGlobalService {
    private map: Map<string, any> = new Map();
    constructor() {
    }

    get(name: string): any {
        return this.map.get(name);
    }

    set(name: string, item: any): void {
        this.map.set(name, item);
    }
}
