import { Iwe8StoreModule } from './../../../iwe8/store/src/lib/store.module';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SystemJsNgModuleLoader } from '@angular/core';

import { AppComponent } from './app.component';
import { Iwe8CommonModule } from '@iwe8/common';
import { StoreModule } from '@ngrx/store';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    Iwe8CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    Iwe8StoreModule,
    RouterModule.forRoot([{
      path: 'app-test',
      loadChildren: "./app-test/app-test.module#AppTestModule"
    }]),
    HttpClientModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/'
  }, SystemJsNgModuleLoader],
  bootstrap: [AppComponent]
})
export class AppModule { }
