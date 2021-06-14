import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EMPTY, Observable } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";

import { AuthService } from "src/app/modules/auth/shared/services/user/auth.service";
import { Result } from "../../models/result/result.model";


@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error instanceof HttpErrorResponse) {

                    /**
                     * Time to refresh tokens.
                     */
                    if (error.status === 401) {
                        return this._authService.refresh().pipe(
                            switchMap((_: Result) => {
                                return next.handle(req);
                            })
                        )
                    }
                    // TODO: Need to add handle for other errors
                }
                return EMPTY;
            })
        )
    }


    constructor(
        private _authService: AuthService,
    ) { }

}