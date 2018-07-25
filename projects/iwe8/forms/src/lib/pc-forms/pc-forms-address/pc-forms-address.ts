import { filter, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { PcAddressResult } from './../pc-address/pc-address-entry/pc-address-entry';
import { ControlWidget } from '@delon/form';
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
export interface PcFormsAddressInterface {
    offset_type: number;
    province: string;
    city: string;
    district: string;
    address: string;
    longitude: number;
    latitude: number;
    street: string;
    detail: string;
}
@Component({
    selector: 'pc-forms-address',
    templateUrl: 'pc-forms-address.html',
    styleUrls: ['./pc-forms-address.scss']
})

export class PcFormsAddressComponent extends ControlWidget implements OnInit, OnDestroy {
    static KEY: string = 'address';
    province: string;
    city: string;
    district: string;
    street: string;
    longitude: number;
    latitude: number;
    address: string;
    detail: string;
    listener: Subscription;
    constructor(cd: ChangeDetectorRef, private store: Store<any>) {
        super(cd);
    }

    ngOnDestroy() {
        this.listener.unsubscribe();
    }

    ngOnInit() {
        this.listener = this.store.select('bmap', 'geocoderResult')
            .pipe(
                filter(res => !!res),
                tap(res => {
                    const addressComponents = res.addressComponents;
                    this.province = addressComponents.province;
                    this.city = addressComponents.city;
                    this.district = addressComponents.district;
                    this.street = addressComponents.street;
                    this.longitude = res.point.lng;
                    this.latitude = res.point.lat;
                    this.address = res.address;
                    this.change();
                })
            ).subscribe();
    }

    change() {
        const res: PcFormsAddressInterface = {
            offset_type: 3,
            province: this.province,
            city: this.city,
            district: this.district,
            longitude: this.longitude,
            latitude: this.latitude,
            address: this.address,
            street: this.street,
            detail: this.detail
        };
        try {
            if (this.ui) {
                if (this.ui.change) this.ui.change(res);
            }
            if (this.setValue) {
                this.setValue(res);
            }
        } catch (err) { }
    }
}
