import { OnInit, OnDestroy, Component } from '@angular/core';
import { ControlWidget } from '@delon/form';
import Hashids from 'hashids';
@Component({
    selector: 'pc-form-random-id',
    templateUrl: 'pc-form-random-id.html',
    styleUrls: ['./pc-form-random-id.scss']
})
export class PcFormsRandomIdComponent extends ControlWidget implements OnInit, OnDestroy {
    static KEY: string = 'randomId';
    key: string;

    hashIds: Hashids;
    ngOnInit() {
        const slat = 'i am a meepo boy';
        this.hashIds = new Hashids(slat, 11);
        this.createRandom();
    }
    ngOnDestroy() { }

    createRandom() {
        const str = new Date().getTime();
        this.key = this.hashIds.encode(str);
    }
}