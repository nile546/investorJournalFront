import { EventEmitter, Injector } from '@angular/core';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { filter, takeUntil } from 'rxjs/operators';
import { Pagination, TableParams, TableSettings } from 'silly-datatable';

import { DropdownTable } from 'src/app/shared/components/abstract/dropdown-table/dropdown-table';
import { Bank } from 'src/app/shared/models/bank/bank.model';
import { Result } from 'src/app/shared/models/result/result.model';
import { environment } from 'src/environments/environment';
import { DashboardActions } from '../../../store/dashboard.actions';
import { DashboardSelectors } from '../../../store/dashboard.selectors';


@Component({
  selector: 'tr-bank-table',
  templateUrl: './bank-table.component.html',
  styleUrls: ['./bank-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BankTableComponent extends DropdownTable implements OnInit {

  @Input() public searchText = '';

  @Output() public bank: EventEmitter<Bank> = new EventEmitter<Bank>();

  constructor(
    _injector: Injector,
  ) {
    super(_injector);


    this.settings = {
      tableClass: 'dropdown__table',
      dataNotFoundPhrase: 'Данные не найдены',
      itemsPerPageList: [environment.itemsPerPageLookup],
    } as TableSettings;


    this.columns = [
      {
        id: 'title',
        cellClass: 'dropdown__cell'
      }
    ];
  }


  ngOnInit(): void {
    this._tableParams = {
      pagination: {
        pageNumber: 0,
        itemsPerPage: environment.itemsPerPageLookup,
      } as Pagination
    }


    this._store.select(DashboardSelectors.getAllBanksResult).pipe(
      filter(data => !!data),
      takeUntil(this._unsubscribe),
    )
      .subscribe((result: Result | null) => {

        const source = this.searchText
          ? (result?.payload as TableParams).source
          : (this._tableParams.source || []).concat((result?.payload as TableParams).source);

        const pagination = Object.assign({}, (result?.payload as TableParams).pagination);

        this._tableParams = Object.assign({}, result?.payload as TableParams, { pagination, source });
        this._changeDetectorRef.detectChanges();
      })
  }


  public get tableParams(): TableParams {
    return this._tableParams;
  }


  public set tableParams(value: TableParams) {
    const tableParams = Object.assign({}, value, { source: [] })
    this._store.dispatch(DashboardActions.getAllBanks({ tableParams }));
  }


  public select(entity: Bank) {
    if (!entity) {
      return;
    }

    this.bank.emit(entity);
  }
}
