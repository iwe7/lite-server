import { CardListComponent } from './card-list/card-list';
import { CommonModule } from '@angular/common';
import { Iwe8PcModule } from '@iwe8/components';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CardDetailComponent } from './card-detail/card-detail';
import { CardRootComponent } from './card-root/card-root';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        CommonModule,
        Iwe8PcModule,
        NgZorroAntdModule,
        RouterModule.forChild([{
            path: "",
            component: CardRootComponent,
            children: [{
                path: "detail",
                component: CardDetailComponent
            }, {
                path: "list",
                component: CardListComponent
            }]
        }])
    ],
    exports: [],
    declarations: [
        CardRootComponent,
        CardDetailComponent,
        CardListComponent
    ],
    providers: [],
})
export class AppCardModule { }
