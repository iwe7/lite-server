import { PcSmsModule } from './pc-sms/pc-sms.module';
import { PcSiderTreeModule } from './pc-sider-tree/pc-sider-tree.module';
import { PcSiderModule } from './pc-sider/pc-sider.module';
import { NgModule } from '@angular/core';
@NgModule({
    exports: [
        PcSiderModule,
        PcSiderTreeModule,
        PcSmsModule
    ]
})
export class Iwe8PcModule { }
