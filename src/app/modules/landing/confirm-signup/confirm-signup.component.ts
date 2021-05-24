import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModalComponents } from 'src/app/shared/components/modal/modal.component';

import { ModalActions } from 'src/app/store/modal/modal.actions';
import { ModalSelectors } from 'src/app/store/modal/modal.selectors';
import { UserActions } from '../../user/store/user/user.actions';


@Component({
  selector: 'tr-confirm-signup',
  templateUrl: './confirm-signup.component.html',
  styleUrls: ['./confirm-signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmSignupComponent implements OnInit, OnDestroy {

  private _unsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _store: Store,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit(): void {

    const token = this._activatedRoute.snapshot.queryParams.token;
    this._store.dispatch(ModalActions.open({ modalComponent: ModalComponents.ConfirmSignup, payload: token }));

    this._store.select(ModalSelectors.isModalOpen).pipe(
      takeUntil(this._unsubscribe),
    )
      .subscribe((status: boolean) => {
        if (status) {
          return;
        }

        this._router.navigate(['../']);
      });
  }


  ngOnDestroy(): void {
    this._unsubscribe.next(true);
    this._unsubscribe.unsubscribe();
  }
}
