import { PcFormsRandomIdComponent } from './pc-form-random-id/pc-form-random-id';
import { PcFormsShopSelectorComponent } from './pc-forms-shop-selector/pc-forms-shop-selector';
import { PcFormsImagesComponent } from './pc-forms-images/pc-forms-images';
import { PcFormsImageComponent } from './pc-forms-image/pc-forms-image';
import { CommonModule } from '@angular/common';
import { Iwe8BmapModule } from '@iwe8/bmap';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PcAddressModule } from './pc-address/pc-address.module';
import { PcFormsAddressComponent } from './pc-forms-address/pc-forms-address';
import { NgModule } from '@angular/core';
import { WidgetRegistry, DelonFormModule } from '@delon/form';

@NgModule({
    imports: [
        PcAddressModule,
        DelonFormModule,
        NgZorroAntdModule,
        FormsModule,
        Iwe8BmapModule,
        CommonModule
    ],
    exports: [],
    declarations: [
        PcFormsAddressComponent,
        PcFormsImagesComponent,
        PcFormsImageComponent,
        PcFormsShopSelectorComponent,
        PcFormsRandomIdComponent
    ],
    entryComponents: [
        PcFormsAddressComponent,
        PcFormsImagesComponent,
        PcFormsImageComponent,
        PcFormsShopSelectorComponent,
        PcFormsRandomIdComponent
    ],
    providers: [],
})
export class PcFormsModule {
    constructor(widgetRegistry: WidgetRegistry) {
        widgetRegistry.register(PcFormsAddressComponent.KEY, PcFormsAddressComponent);
        widgetRegistry.register(PcFormsImagesComponent.KEY, PcFormsImagesComponent);
        widgetRegistry.register(PcFormsShopSelectorComponent.KEY, PcFormsShopSelectorComponent);
        widgetRegistry.register(PcFormsImageComponent.KEY, PcFormsImageComponent);
        widgetRegistry.register(PcFormsRandomIdComponent.KEY, PcFormsRandomIdComponent);
    }
}
