import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pc-forms-address',
    templateUrl: 'pc-forms-address.html',
    styleUrls: ['./pc-forms-address.scss']
})

export class PcFormsAddressComponent implements OnInit {
    static KEY: string = 'address';
    constructor() { }

    ngOnInit() { }
}
