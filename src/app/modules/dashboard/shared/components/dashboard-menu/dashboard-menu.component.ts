import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CRYPTOS, DEPOSITS, PREDICT, STATISTICS, STOCKS } from '../../constants/routes';


@Component({
  selector: 'tr-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardMenuComponent implements OnInit {

  public STATISTICS = STATISTICS;
  public STOCKS = STOCKS;
  public CRYPTOS = CRYPTOS;
  public DEPOSITS = DEPOSITS;
  public PREDICT = PREDICT;

  constructor() { }

  ngOnInit(): void {
  }

}
