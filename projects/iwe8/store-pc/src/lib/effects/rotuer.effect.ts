import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Router } from '@angular/router';
import { tap, map, throttleTime } from 'rxjs/operators';
@Injectable()
export class RouterEffectService {
    @Effect()
    location: Observable<any> = this.actions.ofType('NavigateByUrl').pipe(
        tap((res: any) => {
            try {
                const url = res.payload;
                this.router.navigateByUrl(url);
            } catch (error) {
                window.location.reload();
            }
        }),
        map(res => ({
            type: "RouterSuccess"
        }))
    );
    constructor(
        private actions: Actions,
        private router: Router
    ) { }
}
