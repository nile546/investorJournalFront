import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Currencies } from 'src/app/shared/models/currencies/currencies.model';
import { CurrencyRate } from 'src/app/shared/models/currency-rate/currency-rate.model';
import { Result } from 'src/app/shared/models/result/result.model';

import { DashboardActions } from '../store/dashboard.actions';
import { DashboardSelectors } from '../store/dashboard.selectors';


@Component({
  selector: 'tr-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsComponent implements OnInit, OnDestroy {

  public today: Date = new Date(Date.now());
  public rates: CurrencyRate[] = [];
  public currencyEnum = Currencies;

  private _unsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _store: Store,
    private _changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {

    this._store.select(DashboardSelectors.getCurrencyRatesResult).pipe(
      takeUntil(this._unsubscribe),
    )
      .subscribe((result: Result | null) => {
        this.rates = result?.payload as CurrencyRate[];
        this._changeDetectorRef.detectChanges();
      })


    this._store.dispatch(DashboardActions.getCurrencyRates());
  }


  ngOnDestroy(): void {
    this._unsubscribe.next(true);
    this._unsubscribe.unsubscribe();
  }
}
