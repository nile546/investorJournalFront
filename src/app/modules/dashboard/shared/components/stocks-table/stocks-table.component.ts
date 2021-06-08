import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Column, TableParams, TableSettings } from 'silly-datatable';
import { DashboardActions } from '../../../store/dashboard.actions';
import { DashboardSelectors } from '../../../store/dashboard.selectors';


@Component({
  selector: 'tr-stocks-table',
  templateUrl: './stocks-table.component.html',
  styleUrls: ['./stocks-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StocksTableComponent implements OnInit, OnDestroy {

  public settings: TableSettings;
  public columns: Column[];

  private _tableParams: TableParams = new TableParams();
  private _unsubscribe: Subject<boolean> = new Subject<boolean>();


  constructor(
    private _store: Store,
  ) {

    this.settings = {
      tableClass: 'datatable',
      sortHeaderClass: 'header-link',
      headerRowClass: 'header-row',
      rowClass: 'row',
      dataNotFoundPhrase: 'Данные не найдены',
      itemsPerPageList: [30, 50, 100],
    } as TableSettings;


    this.columns = [
      {
        id: 'id',
        title: '№',
        sortable: true,
      }, {
        id: 'stock.name',
        title: 'Тикер',
      }, {
        id: 'strategy.name',
        title: 'Стратегия',
      }, {
        id: 'pattern.name',
        title: 'Паттерн',
      }, {
        id: 'position',
        title: 'Позиция',
      }, {
        id: 'timeFrame',
        title: 'ТФ',
      }, {
        id: 'openDate',
        title: 'Дата ВХ',
        headerClass: 'open-deal',
      }, {
        id: 'price',
        title: 'ТВХ',
        headerClass: 'open-deal',
      }, {
        id: 'stop_loss',
        title: 'Стоп-лосс',
        headerClass: 'open-deal',
      }, {
        id: 'quantity',
        title: 'Кол-во',
        headerClass: 'open-deal',
      }, {
        id: 'close_date',
        title: 'Дата ВЫХ',
        headerClass: 'close-deal',
      }, {
        id: 'close',
        title: 'Выход',
        headerClass: 'close-deal',
      }, {
        id: 'risk_ratio',
        title: 'Коэф. риска',
      }, {
        id: 'result',
        title: 'Рез.',
        headerClass: 'result-deal',
      }, {
        id: 'result_percent',
        title: 'Рез. %',
        headerClass: 'result-deal',
      }, {
        id: 'deposit_start',
        title: 'Деп. до',
        headerClass: 'result-deal',
      }, {
        id: 'deposit_end',
        title: 'Деп. после',
        headerClass: 'result-deal',
      }
    ] as Column[];
  }


  public get tableParams(): TableParams {
    return this._tableParams;
  }


  public set tableParams(value: TableParams) {
    this._store.dispatch(DashboardActions.getStocksTableParams({ tableParams: value }));
  }


  ngOnInit(): void {
    this._store.select(DashboardSelectors.stocksTableParams).pipe(
      takeUntil(this._unsubscribe)
    )
      .subscribe((stocksTableParams: TableParams) => {
        this._tableParams = stocksTableParams;
      })
  }


  ngOnDestroy(): void {
    this._unsubscribe.next(true);
    this._unsubscribe.unsubscribe();
  }
}
