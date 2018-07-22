import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'pc-sider-menu',
    templateUrl: 'pc-sider-menu.html'
})
export class PcSiderMenuComponent implements OnInit {
    @Input() menu: any;
    nzCollapsed: string = 'pc.sider.nzCollapsed';
    constructor(
        public store: Store<any>
    ) { }
    ngOnInit() { }
    _click() {
        this.store.dispatch(this.menu.action);
    }
}
