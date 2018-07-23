import { FormsModule } from '@angular/forms';
import { DelonFormModule } from '@delon/form';
import { Iwe8CommonModule } from '@iwe8/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { PcSystemSettingComponent } from './pc-system-setting/pc-system-setting';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        Iwe8CommonModule,
        DelonFormModule,
        FormsModule
    ],
    exports: [PcSystemSettingComponent],
    declarations: [PcSystemSettingComponent],
    providers: [],
})
export class PcSystemModule { }
