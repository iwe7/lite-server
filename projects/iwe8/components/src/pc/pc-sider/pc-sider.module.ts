import { PcSiderMenuComponent } from './pc-sider-menu/pc-sider-menu';
import { Iwe8CommonModule } from '@iwe8/common';
import { CommonModule } from '@angular/common';
import { PcHeaderModule } from './../pc-header/pc-header.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgModule } from '@angular/core';

import { PcSiderComponent } from './pc-sider';

@NgModule({
    imports: [
        NgZorroAntdModule,
        PcHeaderModule,
        CommonModule,
        Iwe8CommonModule
    ],
    exports: [PcSiderComponent],
    declarations: [PcSiderComponent, PcSiderMenuComponent],
    providers: [],
})
export class PcSiderModule { }
