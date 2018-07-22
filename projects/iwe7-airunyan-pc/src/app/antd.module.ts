import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

@NgModule({
    exports: [
        NgZorroAntdModule,
        BrowserAnimationsModule
    ],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class AntdModule {

}
