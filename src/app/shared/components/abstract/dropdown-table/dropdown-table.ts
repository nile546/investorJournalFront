import { ChangeDetectorRef, Injector } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";

import { Column, TableParams, TableSettings } from "silly-datatable";


export abstract class DropdownTable {

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


    public abstract set tableParams(value: TableParams);


    public scroll(event: any): void {
        if (!event) {
            return;
        }

        if (!this._tableParams.pagination.pageCount) {
            return;
        }

        if (this._tableParams.pagination.pageCount < this._tableParams.pagination.pageNumber) {
            return;
        }

        if (event.srcElement.offsetHeight + event.srcElement.scrollTop >= event.srcElement.scrollHeight) {
            const pagination = Object.assign(
                {},
                this._tableParams.pagination,
                { pageNumber: this._tableParams.pagination.pageNumber + 1 }
            );

            const tableParams = Object.assign({}, this._tableParams, { pagination });
            this.tableParams = tableParams;
        }
    }
}