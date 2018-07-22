import { siderAllSelector } from '@iwe8/store-pc';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'pc-sider',
    templateUrl: 'pc-sider.html',
    styleUrls: ['./pc-sider.scss']
})
export class PcSiderComponent implements OnInit {
    menus: Observable<any[]>;

    nzCollapsed: string = 'pc.sider.nzCollapsed';
    nzCollapsedWidth: string = 'pc.sider.nzCollapsedWidth';
    nzCollapsible: string = 'pc.sider.nzCollapsible';
    nzReverseArrow: string = 'pc.sider.nzReverseArrow';
    nzTrigger: string = 'pc.sider.nzTrigger';
    nzWidth: string = 'pc.sider.nzWidth';

    isReady: boolean = true;

    constructor(
        private store: Store<any>
    ) {
        this.menus = this.store.select(siderAllSelector).pipe(
            filter(res => res.length > 0)
        );
        this.menus.subscribe(res => {
            console.log(res);
            this.isReady = true;
        });
    }
    ngOnInit() { }
}
