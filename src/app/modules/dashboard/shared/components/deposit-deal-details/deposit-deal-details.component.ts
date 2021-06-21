import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Bank } from 'src/app/shared/models/bank/bank.model';
import { DepositDeal } from 'src/app/shared/models/deposit-deal/deposit-deal.model';
import { DashboardActions } from '../../../store/dashboard.actions';

@Component({
  selector: 'tr-deposit-deal-details',
  templateUrl: './deposit-deal-details.component.html',
  styleUrls: ['./deposit-deal-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepositDealDetailsComponent implements OnInit {

  public depositDeal: DepositDeal = new DepositDeal();

  public form: FormGroup = new FormGroup({
    bank: new FormControl('', [Validators.required]),
    enterDatetime: new FormControl(),
    startDeposit: new FormControl(),
    percent: new FormControl(),
    exitDatetime: new FormControl(),
  });

  constructor(
    private _store: Store,
  ) { }


  ngOnInit(): void {
  }


  public cancel(): void {
    this._store.dispatch(DashboardActions.rowDetails({ component: null, payload: null }));
  }


  public setBank(value: Bank) {
    this.depositDeal.bank = value;
    this.form.controls.bank.setValue(value.title, { emitEvent: false });
  }

  public submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.depositDeal.enterDatetime = new Date(this.form.value.enterDatetime);
    this.depositDeal.startDeposit = +this.form.value.startDeposit * 100;
    this.depositDeal.percent = +this.form.value.percent;
    this.depositDeal.exitDatetime = new Date(this.form.value.exitDatetime);

    this._store.dispatch(DashboardActions.createDepositDeal({ depositDeal: this.depositDeal }));
  }
}
