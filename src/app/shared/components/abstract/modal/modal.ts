import { ChangeDetectorRef, Directive, Injector, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subject } from "rxjs";

import { Result, ResultStatuses } from "src/app/shared/models/result/result.model";
import { ModalActions } from "src/app/store/modal/modal.actions";


@Directive()
export abstract class Modal implements OnDestroy {

    public loading: Observable<boolean> | undefined;
    public resultStatuses = ResultStatuses;
    public payload: unknown;
    public result: Result | null = null;
    public store: Store;
    public unsubscribe: Subject<boolean> = new Subject<boolean>();
    public changeDetectorRef: ChangeDetectorRef;

    constructor(
        private _injector: Injector,
    ) {
        this.store = this._injector.get(Store);
        this.changeDetectorRef = this._injector.get(ChangeDetectorRef);
    }


    public close(): void {
        this.store.dispatch(ModalActions.close());
    }


    ngOnDestroy(): void {
        this.unsubscribe.next(true);
        this.unsubscribe.unsubscribe();
    }
}