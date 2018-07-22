import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    public store: Store<any>
  ) { }

  ngOnInit() {
    this.store.dispatch({
      type: 'InitSider',
      payload: [{
        id: "0",
        nzMode: 'inline',
        nzTheme: 'dark',
        nzInlineCollapsed: true,
        nzInlineIndent: 24,
        nzSelectable: false,
        children: [{
          type: 'submenu',
          title: "系统设置",
          icon: "anticon-setting",
          children: [{
            type: 'item',
            title: "菜单设置",
            icon: "anticon-appstore",
            action: {
              type: "NavigateByUrl",
              payload: "/setting/sider"
            }
          }, {
            type: 'item',
            title: "会员组设置",
            icon: "anticon-appstore",
            action: {
              type: "NavigateByUrl",
              payload: "/setting/group"
            }
          }, {
            type: 'item',
            title: "短信设置",
            icon: "anticon-appstore",
            action: {
              type: "NavigateByUrl",
              payload: "/setting/sms"
            }
          }]
        }]
      }]
    });
  }
}
