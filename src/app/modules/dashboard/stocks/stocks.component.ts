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
      dataNotFoundPhrase: 'Данные не найдены',
    } as TableSettings;


    this.columns = [
      {
        id: 'id',
        title: '№',
        sortable: true,
      } as Column,
      {
        id: '',
        title: 'Тикер',
        sortable: true,
      } as Column,
    ];


    this.tableParams = {} as TableParams;
  }

  ngOnInit(): void {



  }
}
