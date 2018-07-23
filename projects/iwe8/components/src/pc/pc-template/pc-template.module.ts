import { DelonFormModule } from '@delon/form';
import { Iwe8CommonModule } from '@iwe8/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PcTemplateSettingComponent } from './pc-template-setting/pc-template-setting';

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
        PcTemplateSettingComponent
    ],
    declarations: [
        PcTemplateSettingComponent
    ],
    providers: [],
})
export class PcTemplateModule { }
