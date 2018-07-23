import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pc-address-entry',
    templateUrl: 'pc-address-entry.html',
    styleUrls: ['./pc-address-entry.scss']
})

export class PcAddressEntryComponent implements OnInit {
    nzOptions: any;
    values: any;
    constructor() { }

    ngOnInit() { }

    onChanges(e: any) {
        console.log(e);
    }
}
