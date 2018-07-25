import { PcCouponListComponent } from './pc-coupon-list/pc-coupon-list';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { Iwe8CommonModule } from '@iwe8/common';
import { DelonFormModule } from '@delon/form';
import { FormsModule } from '@angular/forms';
import { PcFormsModule } from '@iwe8/forms';
import { DelonABCModule } from '@delon/abc';
import { PcCardDetailComponent } from './pc-card-detail/pc-card-detail';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        Iwe8CommonModule,
        DelonFormModule,
        FormsModule,
        PcFormsModule,
        DelonABCModule
    ],
    exports: [
        PcCardDetailComponent,
        PcCouponListComponent
    ],
    declarations: [
        PcCardDetailComponent,
        PcCouponListComponent
    ],
    providers: [],
})
export class PcCardModule { }
