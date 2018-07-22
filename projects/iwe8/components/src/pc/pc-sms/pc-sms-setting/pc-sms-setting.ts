import { Observable } from 'rxjs';
import { smsAllSelector } from './../../../../../store-pc/src/lib/reducers/sms.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'pc-sms-setting',
    templateUrl: 'pc-sms-setting.html',
    styleUrls: ['./pc-sms-setting.scss']
})
export class PcSmsSettingComponent implements OnInit {
    list: Observable<any[]>;
    constructor(
        private store: Store<any>
    ) {
        this.list = this.store.select(smsAllSelector);
    }

    ngOnInit() { }
}
