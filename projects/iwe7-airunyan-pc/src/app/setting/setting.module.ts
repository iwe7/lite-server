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
                    }
                ]
            }])
    ],
    exports: [],
    declarations: [
        SettingRootComponent,
        SettingSiderComponent,
        SettingGroupComponent,
        SettingSmsComponent
    ],
    providers: [],
})
export class AppSettingModule { }
