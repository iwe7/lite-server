/// <reference path="../bmap.d.ts" />
import { GeocoderService } from './services/geocoder.service';
import { BmapEffectService } from './reducers/bmap.effect';
import { BmapDirective } from './components/bmap';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as bmap from './reducers/bmap.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    StoreModule.forFeature('bmap', bmap.reducer),
    EffectsModule.forFeature([BmapEffectService, GeocoderService])
  ],
  declarations: [
    BmapDirective
  ],
  exports: [
    BmapDirective
  ]
})
export class Iwe8BmapModule { }
