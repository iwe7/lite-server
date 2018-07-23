import { Store } from '@ngrx/store';
import { SFSchema, SFUISchema } from '@delon/form';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pc-template-setting',
    templateUrl: 'pc-template-setting.html'
})

export class PcTemplateSettingComponent implements OnInit {
    payment: Observable<any>;
    schema: Observable<SFSchema>;
    ui: Observable<SFUISchema>;
    constructor(
        public store: Store<any>
    ) {
        this.payment = this.store.select('pc', 'template', 'setting');
        this.schema = this.store.select('pc', 'template', 'schema');
        this.ui = this.store.select('pc', 'template', 'ui');
    }

    ngOnInit() { }
}
