import { Observable, Subscription } from 'rxjs';
import { Directive, Input, OnChanges, SimpleChanges, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';

@Directive({ selector: '[ngStore]' })
export class NgStoreDirective implements OnChanges, OnDestroy {
    @Input() ngStore: string;
    @Input() ngStoreSplit: string = '.';
    private ngStoreData: Observable<any>;
    private listener: Subscription;
    constructor(
        private store: Store<any>,
        private template: TemplateRef<any>,
        private view: ViewContainerRef
    ) {
        console.log(this);
    }

    ngOnChanges(changes: SimpleChanges) {
        this.getStoreData();
    }

    ngOnDestroy() {
        this.listener.unsubscribe();
    }

    private getStoreData() {
        const storeSelectors = this.ngStore.split(this.ngStoreSplit);
        this.ngStoreData = this.store.select(...storeSelectors);
        this.render();
    }

    private render() {
        if (this.listener) {
            this.listener.unsubscribe();
            this.listener = null;
        }
        this.listener = this.ngStoreData.subscribe(res => {
            this.view.createEmbeddedView(this.template, { $implicit: res });
        });
    }
}
