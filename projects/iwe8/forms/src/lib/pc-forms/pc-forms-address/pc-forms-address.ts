import { PcAddressResult } from './../pc-address/pc-address-entry/pc-address-entry';
import { ControlWidget } from '@delon/form';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
export interface PcFormsAddressInterface {
    offset_type: number;
    province: string;
    city: string;
    district: string;
    address: string;
    longitude: number;
    latitude: number;
}
@Component({
    selector: 'pc-forms-address',
    templateUrl: 'pc-forms-address.html',
    styleUrls: ['./pc-forms-address.scss']
})

export class PcFormsAddressComponent extends ControlWidget implements OnInit {
    static KEY: string = 'address';
    loadingTip: string;
    config: any;
    constructor(cd: ChangeDetectorRef) {
        super(cd);
    }

    ngOnInit() {
        this.loadingTip = this.ui.loadingTip || '加载中……';
        this.config = this.ui.config || {};
    }

    change(e: PcAddressResult) {
        const res: PcFormsAddressInterface = {
            offset_type: 3,
            province: e.province,
            city: e.city,
            district: e.district,
            longitude: e.point.lng,
            latitude: e.point.lat,
            address: e.address
        };
        if (this.ui.change) this.ui.change(res);
        this.setValue(res);
    }
}
