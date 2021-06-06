import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { User } from "src/app/shared/models/user/user.model";
import { AuthSelectors } from "../../store/user/auth.selectors";


@Injectable()
export class UserGuard implements CanActivate {

    constructor(
        private _store: Store,
        private _router: Router,
    ) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this._store.select(AuthSelectors.currentUser).pipe(
            map((currentUser: User | null) => {
                if (currentUser?.isActive) {
                    return true;
                }

                return this._router.parseUrl('/landing');
            }),
        );
    }
}