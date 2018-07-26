import {
    Injector, NgModuleFactory,
    NgModuleRef, Type
} from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import {
    Injectable, Inject, SystemJsNgModuleLoader,
    ComponentFactoryResolver
} from '@angular/core';
import { ROUTES, Route } from '@angular/router';
import { flatMap } from 'lodash';

@Injectable({
    providedIn: "root"
})
export class WidgetService {
    private map: Map<string, Type<any>> = new Map();
    constructor() { }
    set(name: string, item: any) {
        this.map.set(name, item);
    }
    load(type: string) {
        if (this.map.has(type)) {
            const component = this.map.get(type);
            return of(component);
        } else {
            return of(null);
            // return this.lazy.load(null);
        }
    }
}

// @Injectable({
//     providedIn: "root"
// })
// export class LazyWidgetService {
//     private map: Map<string, any> = new Map();
//     constructor(
//         @Inject(ROUTES)
//         private routes: any,
//         private loader: SystemJsNgModuleLoader,
//         private injector: Injector
//     ) {
//         const _routes = flatMap(this.routes);
//         _routes.map((route: Route) => {
//             if (route.loadChildren) {
//                 this.map.set(route.path, route.loadChildren);
//             }
//         });
//     }
//     load(type: string) {
//         const path = this.map.get(type);
//         return from(this.loader.load(path)).pipe(
//             map((res: NgModuleFactory<any>) => res.create(this.injector)),
//             switchMap((res: NgModuleRef<any>) => {
//                 const instance = res.instance;
//                 const component = instance.get();
//                 return of(component)
//             })
//         )
//     }
// }
