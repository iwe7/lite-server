import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'setting-sider',
    templateUrl: 'setting-sider.html'
})

export class SettingSiderComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        const i = null;
        try {
            console.log(i.a());
        } catch (error) {
            const name: string = error.name;
            const message = error.message;
            if (name.toLocaleLowerCase() === 'typeerror') {
                console.warn(message);
            }
        }
    }
}
