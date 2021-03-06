import { Iwe8BmapModule } from './../../../../../bmap/src/lib/bmap.module';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PcAddressEntryComponent } from './pc-address-entry/pc-address-entry';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        NgZorroAntdModule,
        CommonModule,
        FormsModule,
        Iwe8BmapModule
    ],
    exports: [
        PcAddressEntryComponent
    ],
    declarations: [
        PcAddressEntryComponent
    ],
    providers: [],
})
export class PcAddressModule { }
