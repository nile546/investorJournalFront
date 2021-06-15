import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AuthActions } from 'src/app/modules/auth/store/user/auth.actions';
import { AuthSelectors } from 'src/app/modules/auth/store/user/auth.selectors';
import { ModalActions } from 'src/app/store/modal/modal.actions';
import { State } from 'src/app/store/root.reducer';
import { User } from '../../models/user/user.model';
import { ModalComponents } from '../modal/modal.component';


@Component({
  selector: 'tr-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {

  public currentUser: Observable<User | null> | undefined;

  constructor(
    private _store: Store<State>,
    private _router: Router,
  ) { }


  ngOnInit(): void {
    this.currentUser = this._store.select(AuthSelectors.currentUser);
  }


  public signin(): void {
    this._store.dispatch(ModalActions.open({ modalComponent: ModalComponents.Signin }));
  }


  public signup(): void {
    this._store.dispatch(ModalActions.open({ modalComponent: ModalComponents.Signup }));
  }

  public signout(): void {
    this._store.dispatch(AuthActions.signout());
    this._router.navigate(['/']);
  }
}
