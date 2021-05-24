import { Component, ChangeDetectionStrategy, Injector } from '@angular/core';
import { filter, takeUntil } from 'rxjs/operators';

import { Modal } from 'src/app/shared/components/abstract/modal/modal';
import { Result, ResultStatuses } from 'src/app/shared/models/result/result.model';
import { ModalActions } from 'src/app/store/modal/modal.actions';
import { UserActions } from '../store/user/user.actions';
import { UserSelectors } from '../store/user/user.selectors';


@Component({
  selector: 'tr-confirm-signup-modal',
  templateUrl: './confirm-signup-modal.component.html',
  styleUrls: ['./confirm-signup-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmSignupModalComponent extends Modal {

  constructor(
    _injector: Injector,
  ) {
    super(_injector);
  }

  ngOnInit(): void {
    if (!this.payload) {
      this.result = {
        status: ResultStatuses.Error
      }
    }

    this.store.dispatch(ModalActions.showSpinner({ status: true }));
    this.store.select(UserSelectors.confirmSignupResult).pipe(
      filter(result => !!result),
      takeUntil(this.unsubscribe),
    )
      .subscribe((result: Result | null) => {
        this.store.dispatch(ModalActions.showSpinner({ status: false }));
        this.result = result;
        this.changeDetectorRef.detectChanges();
      });

    this.store.dispatch(UserActions.confirmSignup({ token: this.payload as string }));
  }
}
