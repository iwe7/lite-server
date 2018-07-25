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
    ngOnInit() {}
    ngOnDestroy() { }
    handlePreview = (file: UploadFile) => {
        this.previewImage = file.url || file.thumbUrl;
        this.previewVisible = true;
    }
}
