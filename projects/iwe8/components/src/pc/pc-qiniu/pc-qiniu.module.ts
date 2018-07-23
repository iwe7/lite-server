import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { Iwe8CommonModule } from '@iwe8/common';
import { DelonFormModule } from '@delon/form';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PcQiniuSettingComponent } from './pc-qiniu-setting/pc-qiniu-setting';

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        Iwe8CommonModule,
        DelonFormModule,
        FormsModule
    ],
    exports: [
        PcQiniuSettingComponent
    ],
    declarations: [
        PcQiniuSettingComponent
    ],
    providers: [],
})
export class PcQiniuModule { }
