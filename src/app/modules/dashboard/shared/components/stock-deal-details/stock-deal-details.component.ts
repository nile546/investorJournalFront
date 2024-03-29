import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Currencies } from 'src/app/shared/models/currencies/currencies.model';

import { Pattern } from 'src/app/shared/models/pattern/pattern.model';
import { Positions } from 'src/app/shared/models/positions/positions.model';
import { Result } from 'src/app/shared/models/result/result.model';
import { StockDeal } from 'src/app/shared/models/stock-deal/stock-deal.model';
import { Stock } from 'src/app/shared/models/stock-instrument/stock-instrument.model';
import { Strategy } from 'src/app/shared/models/strategy/strategy.model';
import { TimeFrames } from 'src/app/shared/models/time-frames/time-frames.model';
import { DashboardActions } from '../../../store/dashboard.actions';
import { DashboardSelectors } from '../../../store/dashboard.selectors';


@Component({
  selector: 'tr-stock-deal-details',
  templateUrl: './stock-deal-details.component.html',
  styleUrls: ['./stock-deal-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockDealDetailsComponent implements OnInit {

  public stockDeal: StockDeal = new StockDeal();
  public positionsEnum = Positions;
  public timeFramesEnum = TimeFrames;

  public form: FormGroup = new FormGroup({
    ticker: new FormControl('', [Validators.required]),
    strategy: new FormControl(),
    pattern: new FormControl(),
    position: new FormControl('', [Validators.required]),
    timeFrame: new FormControl(),
    enterDatetime: new FormControl('', [Validators.required]),
    enterPoint: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    exitDatetime: new FormControl(),
    stopLoss: new FormControl(),
    exitPoint: new FormControl(),
  });

  constructor(
    private _store: Store,
  ) { }


  ngOnInit(): void {
    this._store.select(DashboardSelectors.createStockDealResult).pipe(

    )
      .subscribe((result: Result | null) => {
        if (!result) {
          return;
        }
        this._store.dispatch(DashboardActions.clearCreateResults());
        this._store.dispatch(DashboardActions.rowDetails({ component: null, payload: null }));
      })
  }


  public cancel(): void {
    this._store.dispatch(DashboardActions.rowDetails({ component: null, payload: null }));
  }


  public setStock(value: Stock) {
    this.stockDeal.stock = value;
    this.form.controls.ticker.setValue(value.ticker, { emitEvent: false });
  }


  public setStrategy(value: Strategy) {
    this.stockDeal.strategy = value;
    this.form.controls.strategy.setValue(value.name, { emitEvent: false });
  }


  public setPattern(value: Pattern) {
    this.stockDeal.pattern = value;
    this.form.controls.pattern.setValue(value.name, { emitEvent: false });
  }


  public setPosition(value: Positions) {
    this.stockDeal.position = value;
    this.form.controls.position.setValue(Positions[value], { emitEvent: false });
  }


  public setTimeFrame(value: TimeFrames) {
    this.stockDeal.timeFrame = value;
    this.form.controls.timeFrame.setValue(TimeFrames[value], { emitEvent: false });
  }

  public submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.stockDeal.enterDatetime = new Date(this.form.value.enterDatetime);
    this.stockDeal.enterPoint = +this.form.value.enterPoint * 100;
    this.stockDeal.quantity = +this.form.value.quantity;
    this.stockDeal.exitDatetime = new Date(this.form.value.exitDatetime);
    this.stockDeal.stopLoss = +this.form.value.stopLoss * 100;
    this.stockDeal.exitPoint = +this.form.value.exitPoint * 100;
    this.stockDeal.currency = Currencies.Usd;

    this._store.dispatch(DashboardActions.createStockDeal({ stockDeal: this.stockDeal }));
  }
}
