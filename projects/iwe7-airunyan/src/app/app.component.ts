import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { CoreGlobalService } from '@iwe8/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(
    public global: CoreGlobalService,
    private store: Store<any>
  ) {
    this.store.subscribe(res => console.log(res));
    global.set('global', global);
  }
  getElement(e: any) {
    console.log(e);
  }
  getView(e: any) {
    console.log(e)
  }
  getTemplate(e: any) {
    console.log(e);
  }
}
