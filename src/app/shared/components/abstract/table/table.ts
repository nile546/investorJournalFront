import { ChangeDetectorRef, Directive, Injector, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";
import { Column, TableParams, TableSettings } from "silly-datatable";


@Directive()
export abstract class Table implements OnDestroy {

    public settings: TableSettings = {};
    public columns: Column[] = [];

    public _store: Store;
    public _changeDetectorRef: ChangeDetectorRef;
    public _tableParams: TableParams = new TableParams();
    public _unsubscribe: Subject<boolean> = new Subject<boolean>();

    constructor(
        private _injector: Injector,
    ) {
        this._store = this._injector.get(Store);
        this._changeDetectorRef = this._injector.get(ChangeDetectorRef);
    }


    ngOnDestroy(): void {
        this._unsubscribe.next(true);
        this._unsubscribe.unsubscribe();
    }
}