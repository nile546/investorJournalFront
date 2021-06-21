import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Result, ResultStatuses } from 'src/app/shared/models/result/result.model';
import { ModalActions } from 'src/app/store/modal/modal.actions';
import { DashboardActions } from '../../../store/dashboard.actions';
import { DashboardSelectors } from '../../../store/dashboard.selectors';

@Component({
  selector: 'tr-tinkoff-update-modal',
  templateUrl: './tinkoff-update-modal.component.html',
  styleUrls: ['./tinkoff-update-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TinkoffUpdateModalComponent implements OnInit {

  public token: FormControl = new FormControl('', [Validators.required]);
  public result: Result | null = null;
  public resultStatusesEnum = ResultStatuses

  constructor(
    private _store: Store,
  ) { }

  ngOnInit(): void {

  }

  public load(): void {
    if (this.token.invalid) {
      return;
    }

    this._store.select(DashboardSelectors.loadBrokerDataResult).pipe(

    )
      .subscribe((result: Result | null) => {
        this.result = result;
      });

    this._store.dispatch(DashboardActions.loadBrokerData({ token: this.token.value }));
  }


  public close(): void {
    this._store.dispatch(ModalActions.close());
  }
}
