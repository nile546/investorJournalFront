import { Component, OnInit, ChangeDetectionStrategy, Injector } from '@angular/core';
import { filter, takeUntil } from 'rxjs/operators';
import { Pagination, TableParams, TableSettings } from 'silly-datatable';

import { Table } from 'src/app/shared/components/abstract/table/table';
import { Result } from 'src/app/shared/models/result/result.model';
import { environment } from 'src/environments/environment';
import { DashboardActions } from '../../../store/dashboard.actions';
import { DashboardSelectors } from '../../../store/dashboard.selectors';


@Component({
  selector: 'tr-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockTableComponent extends Table implements OnInit {

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
        id: 'ticker',
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


    this._store.select(DashboardSelectors.getAllStocksResult).pipe(
      filter(data => !!data),
      takeUntil(this._unsubscribe),
    )
      .subscribe((result: Result | null) => {
        this._tableParams = result?.payload as TableParams;
        this._changeDetectorRef.detectChanges();
      })
  }


  public get tableParams(): TableParams {
    return this._tableParams;
  }


  public set tableParams(value: TableParams) {
    this._store.dispatch(DashboardActions.getAllStocks({ tableParams: value }));
  }


  public select(stock: any) {
    console.log('zzzzzzzzzzzzzzzzzzz', stock);
  }
}
