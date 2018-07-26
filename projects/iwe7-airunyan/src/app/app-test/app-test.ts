import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: 'app-test.html'
})

export class AppTestComponent implements OnInit {
    form: any;
    schema: any;
    ui: any;
    constructor(
        public view: ViewContainerRef
    ) { }
    ngOnInit() { }
}
