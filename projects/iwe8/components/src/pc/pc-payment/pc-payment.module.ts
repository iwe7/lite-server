import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { Iwe8CommonModule } from '@iwe8/common';
import { DelonFormModule } from '@delon/form';
import { FormsModule } from '@angular/forms';
import { PcPaymentSettingComponent } from './pc-payment-setting/pc-payment-setting';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        Iwe8CommonModule,
        DelonFormModule,
        FormsModule
    ],
    exports: [
        PcPaymentSettingComponent
    ],
    declarations: [
        PcPaymentSettingComponent
    ],
    providers: [],
})
export class PcPaymentModule { }
