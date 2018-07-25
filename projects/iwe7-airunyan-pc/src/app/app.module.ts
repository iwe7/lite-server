import { AppEffectService } from './effects/app.effect';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Iwe8StorePcModule } from './../../../iwe8/store-pc/src/lib/store-pc.module';
import { Iwe8PcModule } from './../../../iwe8/components/src/pc/pc.module';
import { AntdModule } from './antd.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

import * as reducers from './reducers';
import { DelonFormModule } from '@delon/form';
import { DelonABCModule } from '@delon/abc';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AntdModule,
    Iwe8PcModule,
    Iwe8StorePcModule,
    RouterModule.forRoot([{
      path: "setting",
      loadChildren: "./setting/setting.module#AppSettingModule"
    }, {
      path: "shop",
      loadChildren: "./shop/shop.module#AppShopModule"
    }, {
      path: "shop/:id",
      loadChildren: "./shop/shop.module#AppShopModule"
    }, {
      path: "card",
      loadChildren: "./card/card.module#AppCardModule"
    }], {
        useHash: true
      }),
    StoreModule.forRoot(reducers.reducers),
    EffectsModule.forRoot([AppEffectService]),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    DelonFormModule.forRoot(),
    DelonABCModule.forRoot()
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, { provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
