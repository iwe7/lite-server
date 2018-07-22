import { map, filter } from 'rxjs/operators';
import { siderAllSelector } from '@iwe8/store-pc';
import { Observable, from } from 'rxjs';

import { Component, OnInit, TemplateRef } from '@angular/core';
import { NzTreeNode, NzDropdownContextComponent, NzDropdownService, NzModalService } from 'ng-zorro-antd';
import { Store } from '@ngrx/store';
let treeId: number = 0;
class Iwe8Node {
    children: Iwe8Node[] = [];
    id: string = 'tree';
    constructor(public node: any, public parent?: Iwe8Node) {
        treeId++;
        this.id = this.id + treeId;
        if (node.children) {
            node.children.map(child => {
                this.children.push(new Iwe8Node(child, this));
            });
        }
    }

    getTreeById(key: string) {
        if (this.id === key) {
            return this;
        }
        for (const i in this.children) {
            if (this.children[i].getTreeById(key)) {
                return this.children[i];
            }
        }
    }

    get tree(): NzTreeNode {
        const children: NzTreeNode[] = [];
        this.children.map(res => {
            children.push(res.tree);
        });
        const tree = new NzTreeNode({
            title: this.node ? this.node.title : "菜单组",
            key: this.id,
            expanded: true,
            isLeaf: children.length === 0
        });
        tree.children = children;
        return tree;
    }

    get currentNode() {
        const children: any[] = [];
        this.children.map(res => {
            children.push(res.currentNode);
        });
        this.node.children = children;
        return this.node;
    }
}

@Component({
    selector: 'pc-sider-tree',
    templateUrl: 'pc-sider-tree.html',
    styleUrls: ['./pc-sider-tree.scss']
})
export class PcSiderTreeComponent implements OnInit {
    nodes: NzTreeNode[];
    trees: Iwe8Node[] = [];
    dropdown: NzDropdownContextComponent;
    list: any[] = [];
    constructor(
        public store: Store<any>,
        private nzDropdownService: NzDropdownService,
        private modal: NzModalService
    ) {
        this.store.select(siderAllSelector).pipe(
            map(res => {
                const iwe8Nodes = [];
                res.map(item => {
                    const node = new Iwe8Node(item);
                    this.trees.push(node);
                    const tree = node.tree;
                    iwe8Nodes.push(tree);
                });
                return iwe8Nodes;
            })
        ).subscribe(res => {
            this.nodes = res;
        });
    }

    ngOnInit() { }

    mouseAction(type: string, data: any) {
        if (type === 'check') {
            this.currentNode = data.node;
            this.getCurrentTree(this.currentNode.key).subscribe(res => {
                this.currentTree = res;
                this.currentJson = this.currentTree.currentNode;
                console.log(this);
            });
        }
    }

    getCurrentTree(key: string): Observable<Iwe8Node> {
        return from(this.trees).pipe(
            map((res: Iwe8Node) => res.getTreeById(key)),
            filter(res => !!res)
        );
    }
    currentTree: Iwe8Node;
    currentJson: any;
    // 蒸菜操作的菜单
    currentNode: NzTreeNode;

    addMenu() {
        const modal = this.modal.create({
            nzTitle: "添加菜单",
            nzFooter: [{
                label: '保存',
                onClick: () => {
                    modal.close();
                }
            }]
        });
        modal.afterClose.subscribe(res => {
            console.log(res);
        });
    }

    addMenuItem() {
        const modal = this.modal.create({
            nzTitle: "添加菜单项目",
            nzFooter: [{
                label: '保存',
                onClick: () => {
                    modal.close();
                }
            }]
        });
        modal.afterClose.subscribe(res => {
            console.log(res);
        });
    }

    addMenuGroup() {
        const modal = this.modal.create({
            nzTitle: "添加菜单组",
            nzFooter: [{
                label: '保存',
                onClick: () => {
                    modal.close();
                }
            }]
        });
        modal.afterClose.subscribe(res => {
            console.log(res);
        });
    }

    addMenuSubmenu() {
        const modal = this.modal.create({
            nzTitle: "添加子菜单",
            nzFooter: [{
                label: '保存',
                onClick: () => {
                    modal.close();
                }
            }]
        });
        modal.afterClose.subscribe(res => {
            console.log(res);
        });
    }

    deleteMenu() {
    }
}
