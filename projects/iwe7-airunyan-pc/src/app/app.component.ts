import { LoaderService } from './loader.service';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Iwe7Util3Service } from 'iwe7-util3';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    public store: Store<any>,
    public util: Iwe7Util3Service,
    private loader: LoaderService
  ) {
    this.util.setM('iwe7_design');
    this.util.setModel('app');
  }

  ngOnInit() {
    this.loader.init();
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
          type: "submenu",
          title: "店铺管理",
          icon: "anticon-setting",
          children: [{
            type: "item",
            title: "店铺列表",
            icon: "anticon-appstore",
            action: {
              type: "NavigateByUrl",
              payload: "/shop/list"
            }
          }]
        }, {
          type: "submenu",
          title: "卡券管理",
          icon: "anticon-setting",
          children: [{
            type: "item",
            title: "卡券列表",
            icon: "anticon-appstore",
            action: {
              type: "NavigateByUrl",
              payload: "/card/list"
            }
          }]
        }, {
          type: 'submenu',
          title: "系统设置",
          icon: "anticon-setting",
          children: [{
            type: 'item',
            title: "系统设置",
            icon: "anticon-appstore",
            action: {
              type: "NavigateByUrl",
              payload: "/setting/system"
            }
          }, {
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
          }, {
            type: 'item',
            title: "支付设置",
            icon: "anticon-appstore",
            action: {
              type: "NavigateByUrl",
              payload: "/setting/payment"
            }
          }, {
            type: 'item',
            title: "模板消息",
            icon: "anticon-appstore",
            action: {
              type: "NavigateByUrl",
              payload: "/setting/template"
            }
          }, {
            type: 'item',
            title: "七牛设置",
            icon: "anticon-appstore",
            action: {
              type: "NavigateByUrl",
              payload: "/setting/qiniu"
            }
          }]
        }]
      }]
    });
  }
}
