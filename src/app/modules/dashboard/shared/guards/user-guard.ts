import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { UserSelectors } from "src/app/modules/user/store/user/user.selectors";


export class UserGuard implements CanActivate {

    constructor(
        private _store: Store,
    ) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this._store.select(UserSelectors.currentUser)
    }

}