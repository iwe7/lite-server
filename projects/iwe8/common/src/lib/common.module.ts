import { NgStoreDirective } from './directives/ng-store';
import { GetTemplateDirective } from './directives/get-template';
import { GetElementDirective } from './directives/get-element';
import { GetViewDirective } from './directives/get-view';

import { CardTypePipe } from './pipes/card-type.pipe';
import { StorePipe } from './pipes/store.pipe';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
  ],
  declarations: [
    StorePipe,
    CardTypePipe,
    GetElementDirective,
    GetTemplateDirective,
    GetViewDirective,
    NgStoreDirective
  ],
  exports: [
    StorePipe,
    CardTypePipe,
    GetElementDirective,
    GetTemplateDirective,
    GetViewDirective,
    NgStoreDirective
  ]
})
export class Iwe8CommonModule { }
