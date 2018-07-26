import {
    Directive, Optional, ElementRef, SkipSelf,
    Output, EventEmitter, ViewContainerRef
} from '@angular/core';

@Directive({ selector: '[getElement]', exportAs: 'getElement' })
export class GetElementDirective {
    @Output() getElement: EventEmitter<any> = new EventEmitter();
    constructor(
        @Optional()
        public ele: ElementRef,
        @Optional()
        @SkipSelf()
        public fEle: ElementRef
    ) { }

    ngOnInit() {
        const ele: HTMLElement = this.ele.nativeElement;
        const father: HTMLElement = this.fEle.nativeElement
        this.getElement.emit({
            element: ele,
            parentElement: father
        });
    }
}
