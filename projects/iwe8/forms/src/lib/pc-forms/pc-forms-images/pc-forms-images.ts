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

    constructor(cd: ChangeDetectorRef, public util: Iwe7Util2Service) {
        super(cd);
        this.url = this.util.wupload;
    }
    ngOnInit() { }
    ngOnDestroy() { }
    handlePreview = (file: UploadFile) => {
        this.previewImage = file.url || file.thumbUrl;
        this.previewVisible = true;
    }

    nzRemove = (file: UploadFile) => {
        const images: any[] = this.value;
        const index = images.indexOf(file);
        images.splice(index, 1);
        if (this.ui.change) this.ui.change(images);
        this.setValue(images);
        return true;
    }

    nzChange(e: any) {
        const images = this.value;
        for (let key in images) {
            if (images[key].response) {
                images[key] = images[key].response;
            }
        }
        if (this.ui.change) this.ui.change(images);
        this.setValue(images);
    }
}
