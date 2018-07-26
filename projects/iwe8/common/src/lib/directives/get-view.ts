import {
    Directive, Optional, ElementRef, SkipSelf,
    Output, EventEmitter, ViewContainerRef
} from '@angular/core';

@Directive({ selector: '[getView]', exportAs: 'getView' })
export class GetViewDirective {
    @Output() getView: EventEmitter<any> = new EventEmitter();
    constructor(
        @Optional()
        public view: ViewContainerRef,
        @Optional()
        @SkipSelf()
        public parentView: ViewContainerRef,
    ) { }

    ngOnInit() {
        this.getView.emit({
            view: this.view,
            parentView: this.parentView
        });
    }
}
