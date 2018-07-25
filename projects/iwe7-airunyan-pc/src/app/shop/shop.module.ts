import { ShopGoodCategoryComponent } from './shop-good-category/shop-good-category';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ShopMoneyComponent } from './shop-money/shop-money';
import { ShopStateComponent } from './shop-state/shop-state';
import { ShopWorkComponent } from './shop-work/shop-work';
import { ShopEmployerComponent } from './shop-employer/shop-employer';
import { ShopOrderComponent } from './shop-order/shop-order';
import { ShopGoodComponent } from './shop-good/shop-good';
import { ShopDetailComponent } from './shop-detail/shop-detail';
import { Iwe8PcModule } from '@iwe8/components';
import { ShopRootComponent } from './shop-root/shop-root';
import { CommonModule } from '@angular/common';
import { ShopListComponent } from './shop-list/shop-list';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        Iwe8PcModule,
        NgZorroAntdModule,
        RouterModule.forChild([{
            path: 'list',
            component: ShopListComponent
        }, {
            path: "",
            component: ShopRootComponent,
            children: [{
                path: "detail",
                component: ShopDetailComponent
            }, {
                path: 'good',
                component: ShopGoodComponent
            }, {
                path: 'category',
                component: ShopGoodCategoryComponent
            }, {
                path: "order",
                component: ShopOrderComponent
            }, {
                path: 'employer',
                component: ShopEmployerComponent
            }, {
                path: 'work',
                component: ShopWorkComponent
            }, {
                path: 'money',
                component: ShopMoneyComponent
            }, {
                path: 'state',
                component: ShopStateComponent
            }]
        }])
    ],
    declarations: [
        ShopRootComponent,
        ShopListComponent,
        ShopDetailComponent,
        ShopGoodComponent,
        ShopOrderComponent,
        ShopEmployerComponent,
        ShopWorkComponent,
        ShopStateComponent,
        ShopMoneyComponent,
        ShopGoodCategoryComponent
    ]
})
export class AppShopModule { }
