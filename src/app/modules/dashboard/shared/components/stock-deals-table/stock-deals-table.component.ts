import { CurrencyPipe, DatePipe, PercentPipe } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, Injector } from '@angular/core';
import startCase from 'lodash-es/startCase';
import { filter, takeUntil } from 'rxjs/operators';

import { Column, Pagination, TableParams, TableSettings } from 'silly-datatable';
import { Table } from 'src/app/shared/components/abstract/table/table';
import { ModalComponents } from 'src/app/shared/components/modal/modal.component';
import { Positions } from 'src/app/shared/models/positions/positions.model';
import { Result } from 'src/app/shared/models/result/result.model';
import { TimeFrames } from 'src/app/shared/models/time-frames/time-frames.model';
import { ModalActions } from 'src/app/store/modal/modal.actions';
import { environment } from 'src/environments/environment';
import { DashboardActions } from '../../../store/dashboard.actions';
import { DashboardSelectors } from '../../../store/dashboard.selectors';
import { DetailsComponents } from '../row-details/row-details.component';


@Component({
  selector: 'tr-stock-deals-table',
  templateUrl: './stock-deals-table.component.html',
  styleUrls: ['./stock-deals-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockDealsTableComponent extends Table implements OnInit, OnDestroy {


  constructor(
    _injector: Injector,
    private _datePipe: DatePipe,
    private _currencyPipe: CurrencyPipe,
    private _percentPipe: PercentPipe,
  ) {

    super(_injector)

    this.settings = {
      tableClass: 'datatable',
      sortHeaderClass: 'header-link',
      headerRowClass: 'header-row',
      rowClass: 'row',
      dataNotFoundPhrase: 'Данные не найдены',
      itemsPerPageList: environment.itemsPerPageList,
    } as TableSettings;


    this.columns = [
      {
        id: 'id',
        title: '№',
      }, {
        id: 'stock.ticker',
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
        prepareCellFunction: ((key: Positions) => {
          if (!key) {
            return '';
          }

          return startCase(Positions[key]);
        })
      }, {
        id: 'timeFrame',
        title: 'ТФ',
        prepareCellFunction: ((key: TimeFrames) => {
          if (!key) {
            return '';
          }

          return startCase(TimeFrames[key]);
        })
      }, {
        id: 'enterDatetime',
        title: 'Дата ВХ',
        headerClass: 'open-deal',
        cellClass: 'border-left',
        prepareCellFunction: ((date: Date) => {
          if (!date) {
            return ''
          }

          return this._datePipe.transform(date, 'short');
        }),
      }, {
        id: 'enterPoint',
        title: 'ТВХ',
        headerClass: 'open-deal',
        cellClass: 'right',
        prepareCellFunction: ((price: number) => {
          return this._currencyPipe.transform(price / 100);
        }),
      }, {
        id: 'quantity',
        title: 'Кол-во',
        headerClass: 'open-deal',
        cellClass: 'center',
      }, {
        id: 'exitDatetime',
        title: 'Дата ВЫХ',
        headerClass: 'close-deal',
        cellClass: 'border-left',
        prepareCellFunction: ((date: Date) => {
          if (!date) {
            return ''
          }

          return this._datePipe.transform(date, 'short');
        }),
      }, {
        id: 'stopLoss',
        title: 'Стоп-лосс',
        headerClass: 'close-deal',
        cellClass: 'right',
        prepareCellFunction: ((price: number) => {
          if (!price) {
            return ''
          }

          return this._currencyPipe.transform(price / 100);
        }),
      }, {
        id: 'exitPoint',
        title: 'Выход',
        headerClass: 'close-deal',
        cellClass: 'right',
        prepareCellFunction: ((price: number) => {
          if (!price) {
            return ''
          }

          return this._currencyPipe.transform(price / 100);
        }),
      }, {
        id: 'riskRatio',
        title: 'Коэф. риска',
        cellClass: 'border-left center',
        prepareCellFunction: ((value: number) => {
          if (!value) {
            return ''
          }

          return value.toFixed(2)
        })
      }, {
        id: 'result',
        title: 'Рез.',
        headerClass: 'result-deal',
        cellClass: 'border-left right',
        prepareCellFunction: ((price: number) => {
          return this._currencyPipe.transform(price / 100);
        }),
      },
      // {
      //   id: 'resultInPercent',
      //   title: 'Рез. %',
      //   headerClass: 'result-deal',
      //   cellClass: 'center',
      //   prepareCellFunction: ((percent: number) => {
      //     return this._percentPipe.transform(percent);
      //   }),
      // }, {
      //   id: 'startDeposit',
      //   title: 'Деп. до',
      //   headerClass: 'result-deal',
      //   cellClass: 'right',
      //   prepareCellFunction: ((price: number) => {
      //     return this._currencyPipe.transform(price / 100);
      //   }),
      // }, {
      //   id: 'endDeposit',
      //   title: 'Деп. после',
      //   headerClass: 'result-deal',
      //   cellClass: 'right',
      //   prepareCellFunction: ((price: number) => {
      //     return this._currencyPipe.transform(price / 100);
      //   }),
      // }
    ] as Column[];
  }


  public get tableParams(): TableParams {
    return this._tableParams;
  }


  public set tableParams(value: TableParams) {
    this._store.dispatch(DashboardActions.getAllStockDeals({ tableParams: value }));
  }


  ngOnInit(): void {

    this._tableParams = {
      pagination: {
        pageNumber: 0,
        itemsPerPage: environment.itemsPerPageList[0]
      } as Pagination
    }


    this._store.select(DashboardSelectors.getAllStockDealsResult).pipe(
      filter(data => !!data),
      takeUntil(this._unsubscribe),
    )
      .subscribe((result: Result | null) => {
        this._tableParams = result?.payload as TableParams;
        this._changeDetectorRef.detectChanges();
      })


    this._store.select(DashboardSelectors.createStockDealResult).pipe(
      takeUntil(this._unsubscribe),
    )
      .subscribe((result: Result | null) => {
        if (!result) {
          return;
        }

        const tableParams = Object.assign({}, this._tableParams, { source: [] });
        this._store.dispatch(DashboardActions.getAllStockDeals({ tableParams }));
      })


    this._store.select(DashboardSelectors.loadBrokerDataResult).pipe(
      takeUntil(this._unsubscribe)
    )
      .subscribe((result: Result | null) => {
        if (!result) {
          return;
        }

        const tableParams = Object.assign({}, this._tableParams, { source: [] });
        this._store.dispatch(DashboardActions.getAllStockDeals({ tableParams }));
      })
  }


  public edit(entity: any): void {
    console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh', entity);
  }


  public create(): void {
    this._store.dispatch(DashboardActions.rowDetails({ component: DetailsComponents.StockDealDetails, payload: null }));
  }


  public updateTinkoff(): void {
    this._store.dispatch(ModalActions.open({ modalComponent: ModalComponents.TinkoffUpdate }));
  }
}
