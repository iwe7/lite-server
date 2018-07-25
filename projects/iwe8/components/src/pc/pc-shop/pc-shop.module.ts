import { PcFormsModule } from '@iwe8/forms';
import { PcShopGoodComponent } from './pc-shop-good/pc-shop-good';
import { FormsModule } from '@angular/forms';
import { DelonFormModule } from '@delon/form';
import { Iwe8CommonModule } from '@iwe8/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PcShopDetailComponent } from './pc-shop-detail/pc-shop-detail';
import { PcShopListComponent } from './pc-shop-list/pc-shop-list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelonABCModule } from '@delon/abc';

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
        PcShopListComponent,
        PcShopDetailComponent,
        PcShopGoodComponent
    ],
    declarations: [
        PcShopListComponent,
        PcShopDetailComponent,
        PcShopGoodComponent
    ],
    providers: [],
})
export class PcShopModule { }
