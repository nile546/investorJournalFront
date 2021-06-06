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
        title: 'Таймфрейм',
      }, {
        id: 'openDate',
        title: 'Дата'
      }, {
        id: 'price',
        title: 'ТВХ',
      }
    ];


    this.tableParams = {} as TableParams;
  }

  ngOnInit(): void {



  }
}
