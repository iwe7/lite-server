import { Component, OnInit, ChangeDetectorRef, NgZone, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'widget-string',
    templateUrl: 'widget-string.html'
})
export class WidgetStringComponent extends Subject<any> {
    @ViewChild('view', { read: ViewContainerRef }) view: ViewContainerRef;
    constructor() {
        super();
    }

    ngAfterViewInit() {
        this.next(this.view);
    }
}
