import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CryptoDeal } from 'src/app/shared/models/crypto-deal/crypto-deal.model';
import { Positions } from 'src/app/shared/models/positions/positions.model';
import { TimeFrames } from 'src/app/shared/models/time-frames/time-frames.model';
import { DashboardActions } from '../../../store/dashboard.actions';
import { Crypto } from 'src/app/shared/models/crypto/crypto.model';
import { Strategy } from 'src/app/shared/models/strategy/strategy.model';
import { Pattern } from 'src/app/shared/models/pattern/pattern.model';
import { Currencies } from 'src/app/shared/models/currencies/currencies.model';
import { DashboardSelectors } from '../../../store/dashboard.selectors';
import { Result } from 'src/app/shared/models/result/result.model';


@Component({
  selector: 'tr-crypto-deal-details',
  templateUrl: './crypto-deal-details.component.html',
  styleUrls: ['./crypto-deal-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoDealDetailsComponent implements OnInit {

  public cryptoDeal: CryptoDeal = new CryptoDeal();
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
    this._store.select(DashboardSelectors.createCryptoDealResult).pipe(

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


  public setCrypto(value: Crypto) {
    this.cryptoDeal.crypto = value;
    this.form.controls.ticker.setValue(value.ticker, { emitEvent: false });
  }


  public setStrategy(value: Strategy) {
    this.cryptoDeal.strategy = value;
    this.form.controls.strategy.setValue(value.name, { emitEvent: false });
  }


  public setPattern(value: Pattern) {
    this.cryptoDeal.pattern = value;
    this.form.controls.pattern.setValue(value.name, { emitEvent: false });
  }


  public setPosition(value: Positions) {
    this.cryptoDeal.position = value;
    this.form.controls.position.setValue(Positions[value], { emitEvent: false });
  }


  public setTimeFrame(value: TimeFrames) {
    this.cryptoDeal.timeFrame = value;
    this.form.controls.timeFrame.setValue(TimeFrames[value], { emitEvent: false });
  }

  public submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.cryptoDeal.enterDatetime = new Date(this.form.value.enterDatetime);
    this.cryptoDeal.enterPoint = +this.form.value.enterPoint * 100;
    this.cryptoDeal.quantity = +this.form.value.quantity;
    this.cryptoDeal.exitDatetime = new Date(this.form.value.exitDatetime);
    this.cryptoDeal.stopLoss = +this.form.value.stopLoss * 100;
    this.cryptoDeal.exitPoint = +this.form.value.exitPoint * 100;
    this.cryptoDeal.currency = Currencies.Usd;

    this._store.dispatch(DashboardActions.createCryptoDeal({ cryptoDeal: this.cryptoDeal }));
  }
}
