import { Iwe8CommonModule } from '@iwe8/common';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgModule } from '@angular/core';

import { PcHeaderComponent } from './pc-header';

@NgModule({
    imports: [
        NgZorroAntdModule,
        CommonModule,
        Iwe8CommonModule
    ],
    exports: [PcHeaderComponent],
    declarations: [PcHeaderComponent],
    providers: [],
})
export class PcHeaderModule { }
