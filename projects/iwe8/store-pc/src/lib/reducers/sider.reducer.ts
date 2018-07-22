import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

export type Iwe8NzMenuChild = Iwe8NzMenuItem | Iwe8NzMenuSubmenu | Iwe7NzMenuGroup | Iwe7NzMenuDivider;

export interface Iwe8NzMenuItem {
    nzDisabled?: boolean;
    nzSelected?: boolean;
    text?: string;
    icon?: string;
    type?: 'item';
}
export interface Iwe7NzMenuDivider {
    type?: 'divider';
}
export interface Iwe7NzMenuGroup {
    title: string;
    type?: 'group';
    children: Iwe8NzMenuItem[];
}
export interface Iwe8NzMenuSubmenu {
    type: "submenu";
    nzOpen: boolean;
    nzDisabled: boolean;
    children: Iwe8NzMenuItem[];
}

export interface Iwe8NzMenu {
    type: 'menu';
    id: string;
    // 菜单类型，现在支持垂直、水平、和内嵌模式三种
    nzMode?: string | 'vertical' | 'horizontal' | 'inline';
    // 主题颜色
    nzTheme?: string | 'light' | 'dark';
    // inline 时菜单是否收起状态
    nzInlineCollapsed?: boolean;
    // inline 模式的菜单缩进宽度
    nzInlineIndent?: number;
    // 是否允许选中
    nzSelectable?: boolean;
    children: Iwe8NzMenuChild[];
}
export interface State extends EntityState<Iwe8NzMenu> {
    // 当前收起状态
    nzCollapsed: boolean;
    // 收缩宽度，设置为 0 会出现特殊 trigger
    nzCollapsedWidth: number;
    // 是否可收起
    nzCollapsible: boolean;
    // 翻转折叠提示箭头的方向，当 Sider 在右边时可以使用
    nzReverseArrow: boolean;
    // 自定义 trigger，设置为 null 时隐藏 trigger
    nzTrigger: string;
    // 宽度
    nzWidth: string;
}

export const adapter = createEntityAdapter<Iwe8NzMenu>({
    selectId: (item: Iwe8NzMenu) => item.id
});
/*
    nzMode: 'inline',
    nzTheme: 'dark',
    nzInlineCollapsed: true,
    nzInlineIndent: 24,
    nzSelectable: false
*/
export const initState: State = adapter.getInitialState({
    nzCollapsed: false,
    nzCollapsedWidth: 80,
    nzCollapsible: false,
    nzReverseArrow: false,
    nzTrigger: null,
    nzWidth: '200'
});

export function reducer(
    state: State = initState,
    action: any
) {
    switch (action.type) {
        case 'InitSider': {
            return adapter.addAll(action.payload, state);
        }
        case 'SwitchSider': {
            return { ...state, nzCollapsed: !state.nzCollapsed };
        }
        default: {
            return state;
        }
    }
}

export const pcSelector: MemoizedSelector<any, any> = createFeatureSelector('pc');
export const siderSelector: MemoizedSelector<any, State> = createSelector(
    pcSelector,
    (state: any) => state.sider
);
export const siderAllSelector: MemoizedSelector<State, Iwe8NzMenu[]> = createSelector(
    siderSelector,
    adapter.getSelectors().selectAll
);
