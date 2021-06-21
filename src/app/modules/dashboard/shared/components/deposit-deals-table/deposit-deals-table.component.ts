import { CurrencyPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { filter, takeUntil } from 'rxjs/operators';
import { Column, Pagination, TableParams, TableSettings } from 'silly-datatable';
import { Table } from 'src/app/shared/components/abstract/table/table';
import { Result } from 'src/app/shared/models/result/result.model';
import { environment } from 'src/environments/environment';
import { DashboardActions } from '../../../store/dashboard.actions';
import { DashboardSelectors } from '../../../store/dashboard.selectors';
import { DetailsComponents } from '../row-details/row-details.component';

@Component({
  selector: 'tr-deposit-deals-table',
  templateUrl: './deposit-deals-table.component.html',
  styleUrls: ['./deposit-deals-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepositDealsTableComponent extends Table implements OnInit, OnDestroy {

  constructor(
    _injector: Injector,
    private _datePipe: DatePipe,
    private _currencyPipe: CurrencyPipe,
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
        id: 'banks_insruments.name',
        title: 'Банк',
      }, {
        id: 'enterDatetime',
        title: 'Открытие депозита',
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
        title: 'Сумма депозита',
        headerClass: 'open-deal',
        cellClass: 'right',
        prepareCellFunction: ((price: number) => {
          return this._currencyPipe.transform(price / 100);
        }),
      }, {
        id: 'percent',
        title: 'Процент',
        headerClass: 'close-deal',
      }, {
        id: 'exitDatetime',
        title: 'Дата закрытия депозита',
        headerClass: 'close-deal',
        cellClass: 'right',
        prepareCellFunction: ((date: Date) => {
          if (!date) {
            return ''
          }

          return this._datePipe.transform(date, 'short');
        }),
      }, {
        id: 'result',
        title: 'Результат',
        headerClass: 'result-deal',
        cellClass: 'border-left right',
        prepareCellFunction: ((price: number) => {
          return this._currencyPipe.transform(price / 100);
        }),
      }, {
        id: 'exitPoint',
        title: 'Конечный депозит',
        headerClass: 'result-deal',
        prepareCellFunction: ((price: number) => {
          if (!price) {
            return ''
          }

          return this._currencyPipe.transform(price / 100);
        }),
      }
    ] as Column[];
  }


  public get tableParams(): TableParams {
    return this._tableParams;
  }


  public set tableParams(value: TableParams) {
    this._store.dispatch(DashboardActions.getAllDepositDeals({ tableParams: value }));
  }


  ngOnInit(): void {
    this._tableParams = {
      pagination: {
        pageNumber: 0,
        itemsPerPage: environment.itemsPerPageList[0]
      } as Pagination
    }


    this._store.select(DashboardSelectors.getAllDepositDealsResult).pipe(
      filter(data => !!data),
      takeUntil(this._unsubscribe),
    )
      .subscribe((result: Result | null) => {
        this._tableParams = result?.payload as TableParams;
        this._changeDetectorRef.detectChanges();
      })


    this._store.select(DashboardSelectors.createDepositDealResult).pipe(
      takeUntil(this._unsubscribe),
    )
      .subscribe((result: Result | null) => {
        if (!result) {
          return;
        }

        const tableParams = Object.assign({}, this._tableParams, { source: [] });
        this._store.dispatch(DashboardActions.getAllDepositDeals({ tableParams }));
      })
  }


  public edit(entity: any): void {
    console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh', entity);
  }


  public create(): void {
    this._store.dispatch(DashboardActions.rowDetails({ component: DetailsComponents.DepositDealDetails, payload: null }));
  }
}


