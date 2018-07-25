import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ControlWidget } from '@delon/form';
import { Iwe7Util2Service } from 'iwe7-util2';
import { UploadFile } from 'ng-zorro-antd';
@Component({
    selector: 'pc-forms-images',
    templateUrl: 'pc-forms-images.html',
    styleUrls: ['./pc-forms-images.scss']
})
export class PcFormsImagesComponent extends ControlWidget implements OnInit, OnDestroy {
    static KEY: string = 'images';
    url: string;
    previewImage = '';
    previewVisible = false;

    images: any[] = [];

    constructor(cd: ChangeDetectorRef, public util: Iwe7Util2Service) {
        super(cd);
        this.url = this.util.wupload;
    }
    ngOnInit() {
        this.images = this.value || [];
    }
    ngOnDestroy() { }
    handlePreview = (file: UploadFile) => {
        this.previewImage = file.url || file.thumbUrl;
        this.previewVisible = true;
    }

    nzRemove = (file: UploadFile) => {
        const index = this.images.indexOf(file);
        this.images.splice(index, 1);
        this.change();
        return true;
    }

    nzChange(e: any) {
        console.log(this.images);
        this.change();
    }

    change() {
        if (this.ui.change) this.ui.change(this.images);
        this.setValue(this.images);
    }
}
