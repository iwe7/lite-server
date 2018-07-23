import { PcAddressModule } from './pc-address/pc-address.module';
import { PcFormsAddressComponent } from './pc-forms-address/pc-forms-address';
import { NgModule } from '@angular/core';
import { WidgetRegistry, DelonFormModule } from '@delon/form';

@NgModule({
    imports: [
        PcAddressModule,
        DelonFormModule
    ],
    exports: [],
    declarations: [
        PcFormsAddressComponent
    ],
    entryComponents: [
        PcFormsAddressComponent
    ],
    providers: [],
})
export class PcFormsModule {
    constructor(widgetRegistry: WidgetRegistry) {
        widgetRegistry.register(PcFormsAddressComponent.KEY, PcFormsAddressComponent);
    }
}
