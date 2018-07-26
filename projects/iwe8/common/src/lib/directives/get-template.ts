import {
    Directive, Optional, TemplateRef, SkipSelf,
    Output, EventEmitter, ViewContainerRef
} from '@angular/core';

@Directive({ selector: '[getTemplate]', exportAs: 'getTemplate' })
export class GetTemplateDirective {
    @Output() getTemplate: EventEmitter<TemplateRef<any>> = new EventEmitter();
    constructor(
        @Optional()
        public template: TemplateRef<any>
    ) { }

    ngOnInit() {
        this.getTemplate.emit(this.template);
    }
}
