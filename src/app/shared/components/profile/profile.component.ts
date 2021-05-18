import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserSelectors } from 'src/app/modules/user/store/user/user.selectors';

import { ModalActions } from 'src/app/store/modal/modal.actions';
import { State } from 'src/app/store/root.reducer';
import { Result } from '../../models/result/result.model';
import { ModalComponents } from '../modal/modal.component';


@Component({
  selector: 'tr-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit, OnDestroy {

  private _unsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _store: Store<State>
  ) { }

  ngOnInit(): void {

    this._store.select(UserSelectors.signupResult).pipe(
      takeUntil(this._unsubscribe),
    )
      .subscribe((result: Result | null) => {
        if (!result) {
          return;
        }

        this._store.dispatch(ModalActions.open({
          modalComponent: ModalComponents.SignupResult,
          payload: result
        }));
      });
  }


  public signin(): void {
    this._store.dispatch(ModalActions.open({ modalComponent: ModalComponents.Signin }));
  }


  public signup(): void {
    this._store.dispatch(ModalActions.open({ modalComponent: ModalComponents.Signup }));
  }


  ngOnDestroy(): void {
    this._unsubscribe.next(true);
    this._unsubscribe.unsubscribe();
  }
}
