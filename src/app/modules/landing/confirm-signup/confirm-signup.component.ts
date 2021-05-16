import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ModalComponents } from 'src/app/shared/components/modal/modal.component';

import { ModalActions } from 'src/app/store/modal/modal.actions';
import { UserActions } from '../../user/store/user/user.actions';


@Component({
  selector: 'tr-confirm-signup',
  templateUrl: './confirm-signup.component.html',
  styleUrls: ['./confirm-signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmSignupComponent implements OnInit {

  constructor(
    private _store: Store,
    private _activatedRoute: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this._store.dispatch(ModalActions.open({ modalComponent: ModalComponents.CoonfirmSignup }))

    const token = this._activatedRoute.snapshot.queryParams.token;
    console.log('zzzzzzzzzzzzzzzz', token);
    if (!token) {
      // this._store.dispatch(UserActions.confirmSigninFailure());
      return;
    }
  }

}
