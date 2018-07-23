import { Iwe8CommonModule } from '@iwe8/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { PcSmsSettingComponent } from './pc-sms-setting/pc-sms-setting';
import { NgModule } from '@angular/core';
import { DelonFormModule } from '@delon/form';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        Iwe8CommonModule,
        DelonFormModule,
        FormsModule
    ],
    exports: [
        PcSmsSettingComponent
    ],
    declarations: [
        PcSmsSettingComponent
    ],
    providers: [],
})
export class PcSmsModule { }
