import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SFSchema, SFUISchema } from '@delon/form';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pc-qiniu-setting',
    templateUrl: 'pc-qiniu-setting.html'
})

export class PcQiniuSettingComponent implements OnInit {
    payment: Observable<any>;
    schema: Observable<SFSchema>;
    ui: Observable<SFUISchema>;
    constructor(
        public store: Store<any>
    ) {
        this.payment = this.store.select('pc', 'qiniu', 'setting');
        this.schema = this.store.select('pc', 'qiniu', 'schema');
        this.ui = this.store.select('pc', 'qiniu', 'ui');
    }
    ngOnInit() { }
}
