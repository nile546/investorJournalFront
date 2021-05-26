import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UserSelectors } from 'src/app/modules/user/store/user/user.selectors';
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
    private _store: Store<State>
  ) { }


  ngOnInit(): void {
    this.currentUser = this._store.select(UserSelectors.currentUser);
  }


  public signin(): void {
    this._store.dispatch(ModalActions.open({ modalComponent: ModalComponents.Signin }));
  }


  public signup(): void {
    this._store.dispatch(ModalActions.open({ modalComponent: ModalComponents.Signup }));
  }
}
