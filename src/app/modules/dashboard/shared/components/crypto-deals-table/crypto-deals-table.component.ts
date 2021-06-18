import { PercentPipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Injector } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { startCase } from 'lodash-es';
import { filter, takeUntil } from 'rxjs/operators';
import { Column, Pagination, TableParams, TableSettings } from 'silly-datatable';
import { Table } from 'src/app/shared/components/abstract/table/table';
import { Positions } from 'src/app/shared/models/positions/positions.model';
import { Result } from 'src/app/shared/models/result/result.model';
import { TimeFrames } from 'src/app/shared/models/time-frames/time-frames.model';
import { environment } from 'src/environments/environment';
import { DashboardActions } from '../../../store/dashboard.actions';
import { DashboardSelectors } from '../../../store/dashboard.selectors';
import { DetailsComponents } from '../row-details/row-details.component';

@Component({
  selector: 'tr-crypto-deals-table',
  templateUrl: './crypto-deals-table.component.html',
  styleUrls: ['./crypto-deals-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoDealsTableComponent extends Table implements OnInit, OnDestroy {

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
        sortable: true,
      }, {
        id: 'crypto.ticker',
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
          return this._currencyPipe.transform(price);
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

          return this._currencyPipe.transform(price);
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

          return this._currencyPipe.transform(price);
        }),
      }, {
        id: 'riskRatio',
        title: 'Коэф. риска',
        cellClass: 'border-left center',
        prepareCellFunction: ((percent: number) => {
          if (!percent) {
            return ''
          }

          return this._percentPipe.transform(percent);
        }),
      }, {
        id: 'result',
        title: 'Рез.',
        headerClass: 'result-deal',
        cellClass: 'border-left right',
        prepareCellFunction: ((price: number) => {
          return this._currencyPipe.transform(price);
        }),
      }, {
        id: 'resultInPercent',
        title: 'Рез. %',
        headerClass: 'result-deal',
        cellClass: 'center',
        prepareCellFunction: ((percent: number) => {
          return this._percentPipe.transform(percent);
        }),
      }, {
        id: 'startDeposit',
        title: 'Деп. до',
        headerClass: 'result-deal',
        cellClass: 'right',
        prepareCellFunction: ((price: number) => {
          return this._currencyPipe.transform(price);
        }),
      }, {
        id: 'endDeposit',
        title: 'Деп. после',
        headerClass: 'result-deal',
        cellClass: 'right',
        prepareCellFunction: ((price: number) => {
          return this._currencyPipe.transform(price);
        }),
      }
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


    this._store.select(DashboardSelectors.getAllCryptoDealsResult).pipe(
      filter(data => !!data),
      takeUntil(this._unsubscribe),
    )
      .subscribe((result: Result | null) => {
        this._tableParams = result?.payload as TableParams;
        this._changeDetectorRef.detectChanges();
      })
  }


  public edit(entity: any): void {
    console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh', entity);
  }


  public create(): void {
    this._store.dispatch(DashboardActions.rowDetails({ component: DetailsComponents.CryptoDealDetails, payload: null }));
  }
}
