import { SettingSystemComponent } from './setting-system/setting-system';
import { SettingQiniuComponent } from './setting-qiniu/setting-qiniu';
import { SettingTemplateComponent } from './setting-template/setting-template';
import { SettingPaymentComponent } from './setting-payment/setting-payment';
import { SettingSmsComponent } from './setting-sms/setting-sms';
import { SettingGroupComponent } from './setting-group/setting-group';
import { Iwe8PcModule } from '@iwe8/components';
import { SettingRootComponent } from './setting-root/setting-root';
import { RouterModule } from '@angular/router';
import { SettingSiderComponent } from './setting-sider/setting-sider';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        Iwe8PcModule,
        RouterModule.forChild([
            {
                path: '',
                component: SettingRootComponent,
                children: [
                    {
                        path: 'sider',
                        component: SettingSiderComponent
                    },
                    {
                        path: 'group',
                        component: SettingGroupComponent
                    },
                    {
                        path: 'sms',
                        component: SettingSmsComponent
                    },
                    {
                        path: 'payment',
                        component: SettingPaymentComponent
                    },
                    {
                        path: "template",
                        component: SettingTemplateComponent
                    },
                    {
                        path: "qiniu",
                        component: SettingQiniuComponent
                    },
                    {
                        path: 'system',
                        component: SettingSystemComponent
                    }
                ]
            }])
    ],
    exports: [],
    declarations: [
        SettingRootComponent,
        SettingSiderComponent,
        SettingGroupComponent,
        SettingSmsComponent,
        SettingPaymentComponent,
        SettingTemplateComponent,
        SettingQiniuComponent,
        SettingSystemComponent
    ],
    providers: [],
})
export class AppSettingModule { }
