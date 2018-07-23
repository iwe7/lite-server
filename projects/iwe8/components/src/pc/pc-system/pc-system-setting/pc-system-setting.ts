import { Store } from '@ngrx/store';
import { SFSchema, SFUISchema } from '@delon/form';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pc-system-setting',
    templateUrl: 'pc-system-setting.html'
})

export class PcSystemSettingComponent implements OnInit {
    payment: Observable<any>;
    schema: Observable<SFSchema>;
    ui: Observable<SFUISchema>;
    constructor(
        public store: Store<any>
    ) {
        this.payment = this.store.select('pc', 'system', 'setting');
        this.schema = this.store.select('pc', 'system', 'schema');
        this.ui = this.store.select('pc', 'system', 'ui');
    }

    ngOnInit() { }
}
