import { CardTypePipe } from './pipes/card-type.pipe';
import { StorePipe } from './pipes/store.pipe';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
  ],
  declarations: [
    StorePipe,
    CardTypePipe
  ],
  exports: [
    StorePipe,
    CardTypePipe
  ]
})
export class Iwe8CommonModule { }
