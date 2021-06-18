import { ChangeDetectorRef, Injector } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";
import { Column, TableParams, TableSettings } from "silly-datatable";


export abstract class Table {

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
}