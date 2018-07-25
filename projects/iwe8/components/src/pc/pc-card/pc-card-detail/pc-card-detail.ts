import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { SFSchema, SFUISchema } from '@delon/form';
import { Iwe8SchemaStore } from '@iwe8/core';

@Component({
    selector: 'pc-card-detail',
    templateUrl: 'pc-card-detail.html',
    styleUrls: ['./pc-card-detail.scss']
})
export class PcCardDetailComponent implements OnInit {
    constructor(
        private store: Store<any>
    ) {

    }

    ngOnInit() { }

    formChange(e: any) {

    }
}
