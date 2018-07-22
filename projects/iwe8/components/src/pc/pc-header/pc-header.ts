import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pc-header',
    templateUrl: 'pc-header.html',
    styleUrls: ['./pc-header.scss']
})
export class PcHeaderComponent implements OnInit {
    nzCollapsed: string = 'pc.sider.nzCollapsed';
    constructor(
        private store: Store<any>
    ) { }

    ngOnInit() { }

    switchSider() {
        this.store.dispatch({
            type: "SwitchSider"
        });
    }
}
