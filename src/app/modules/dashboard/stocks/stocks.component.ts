import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Column, TableParams, TableSettings } from 'silly-datatable';


@Component({
  selector: 'tr-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StocksComponent implements OnInit {

  public settings: TableSettings;
  public columns: Column[];
  public tableParams: TableParams;

  constructor() {

    this.settings = {
      tableClass: 'datatable',
      sortHeaderClass: 'header-link',
      headerRowClass: 'header-row',
      rowClass: 'row',
      dataNotFoundPhrase: 'Данные не найдены',
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


    this.tableParams = {} as TableParams;
  }

  ngOnInit(): void {



  }
}
