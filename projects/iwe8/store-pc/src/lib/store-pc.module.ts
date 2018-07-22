import { RouterModule } from '@angular/router';
import { RouterEffectService } from './effects/rotuer.effect';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as pc from './reducers';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  imports: [
    StoreModule.forFeature('pc', pc.reducers),
    EffectsModule.forFeature([RouterEffectService]),
    RouterModule
  ],
  declarations: [],
  exports: []
})
export class Iwe8StorePcModule { }
