import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SFSchema, SFUISchema } from '@delon/form';

@Component({
    selector: 'pc-payment-setting',
    templateUrl: 'pc-payment-setting.html'
})

export class PcPaymentSettingComponent implements OnInit {
    payment: Observable<any>;
    schema: Observable<SFSchema>;
    ui: Observable<SFUISchema>;
    constructor(
        public store: Store<any>
    ) {
        this.payment = this.store.select('pc', 'payment', 'setting');
        this.schema = this.store.select('pc', 'payment', 'schema');
        this.ui = this.store.select('pc', 'payment', 'ui');
    }

    ngOnInit() { }
}
