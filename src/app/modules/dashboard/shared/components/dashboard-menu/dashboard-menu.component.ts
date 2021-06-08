import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CRYPTO_DEALS, DEPOSIT_DEALS, PREDICT, STATISTICS, STOCK_DEALS } from '../../constants/routes';


@Component({
  selector: 'tr-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardMenuComponent implements OnInit {

  public STATISTICS = STATISTICS;
  public STOCK_DEALS = STOCK_DEALS;
  public CRYPTO_DEALS = CRYPTO_DEALS;
  public DEPOSIT_DEALS = DEPOSIT_DEALS;
  public PREDICT = PREDICT;

  constructor() { }

  ngOnInit(): void {
  }

}
