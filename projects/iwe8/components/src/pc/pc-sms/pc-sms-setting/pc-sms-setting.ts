import { Observable } from 'rxjs';
import { smsAllSelector } from './../../../../../store-pc/src/lib/reducers/sms.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SFSchema, SFUISchema } from '@delon/form';

@Component({
    selector: 'pc-sms-setting',
    templateUrl: 'pc-sms-setting.html',
    styleUrls: ['./pc-sms-setting.scss']
})
export class PcSmsSettingComponent implements OnInit {
    list: Observable<any[]>;

    schema: SFSchema = {
        properties: {}
    };
    ui: SFUISchema = {};
    constructor(
        private store: Store<any>
    ) {
        this.list = this.store.select(smsAllSelector);
    }

    ngOnInit() { }
    currentItem: any;
    _click(item: any) {
        this.currentItem = item;
    }
}
