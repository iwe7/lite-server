import { AppTestComponent } from './app-test';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: AppTestComponent }
        ])
    ],
    exports: [],
    declarations: [
        AppTestComponent
    ],
    providers: [],
})
export class AppTestModule {
    get() {
        return AppTestComponent;
    }
}
