import { Iwe8CommonModule } from '@iwe8/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { PcSmsSettingComponent } from './pc-sms-setting/pc-sms-setting';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        Iwe8CommonModule
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
