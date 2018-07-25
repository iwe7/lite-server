import { ControlWidget } from '@delon/form';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Iwe7Util2Service } from 'iwe7-util2';
@Component({
    selector: 'pc-forms-image',
    templateUrl: 'pc-forms-image.html',
    styleUrls: ['./pc-forms-image.scss']
})
export class PcFormsImageComponent extends ControlWidget implements OnInit, OnDestroy {
    static KEY: string = 'image';
    url: string;
    constructor(cd: ChangeDetectorRef, public util: Iwe7Util2Service) {
        super(cd);
        this.url = this.util.wupload;
    }
    ngOnInit() {
        console.log(this);
    }

    ngOnDestroy() { }

    change(e: any) {
        const file = e.file;
        if (file.status === 'done') {
            const response = file.response;
            if (response.url) {
                if (this.ui) {
                    if (this.ui.change) this.ui.change(response.url);
                }
                if (this.setValue) {
                    this.setValue(response.url);
                }
                console.log(this.value);
            }
        }
    }
}
