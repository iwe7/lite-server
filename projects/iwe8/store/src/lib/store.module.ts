import { Iwe8WidgetsModule } from './widgets/widgets.module';
import { Iwe8FormDirective } from './iwe8-form/iwe8-form';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import * as reducers from './reducers/index';

@NgModule({
    imports: [
        StoreModule.forFeature('form', reducers.reducers),
        Iwe8WidgetsModule
    ],
    exports: [
        Iwe8FormDirective,
    ],
    declarations: [
        Iwe8FormDirective,
    ],
    providers: [],
})
export class Iwe8StoreModule { }
