import { CommonModule } from '@angular/common';
import { Iwe8CommonModule } from '@iwe8/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { PcSiderTreeComponent } from './pc-sider-tree';

@NgModule({
    imports: [
        FormsModule,
        NgZorroAntdModule,
        Iwe8CommonModule,
        CommonModule
    ],
    exports: [PcSiderTreeComponent],
    declarations: [PcSiderTreeComponent],
    providers: [],
})
export class PcSiderTreeModule { }
