import { WidgetStringComponent } from './string/widget-string/widget-string';
import { WidgetService } from './../widget.service';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
    ],
    exports: [
        WidgetStringComponent
    ],
    declarations: [
        WidgetStringComponent
    ],
    entryComponents: [
        WidgetStringComponent
    ],
    providers: [],
})
export class Iwe8WidgetsModule {
    constructor(
        private widget: WidgetService
    ) {
        this.widget.set('widget-string', WidgetStringComponent);
    }
}
