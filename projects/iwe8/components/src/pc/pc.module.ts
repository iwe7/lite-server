import { PcShopModule } from './pc-shop/pc-shop.module';
import { PcSystemModule } from './pc-system/pc-system.module';
import { PcQiniuModule } from './pc-qiniu/pc-qiniu.module';
import { PcTemplateModule } from './pc-template/pc-template.module';
import { PcPaymentModule } from './pc-payment/pc-payment.module';
import { PcSmsModule } from './pc-sms/pc-sms.module';
import { PcSiderTreeModule } from './pc-sider-tree/pc-sider-tree.module';
import { PcSiderModule } from './pc-sider/pc-sider.module';
import { NgModule } from '@angular/core';
@NgModule({
    exports: [
        PcSiderModule,
        PcSiderTreeModule,
        PcSmsModule,
        PcPaymentModule,
        PcTemplateModule,
        PcQiniuModule,
        PcSystemModule,
        PcShopModule
    ]
})
export class Iwe8PcModule { }
