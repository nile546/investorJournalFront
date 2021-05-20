import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { ModalActions } from 'src/app/store/modal/modal.actions';
import { State } from 'src/app/store/root.reducer';
import { ModalComponents } from '../modal/modal.component';


@Component({
  selector: 'tr-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {

  constructor(
    private _store: Store<State>
  ) { }


  public signin(): void {
    this._store.dispatch(ModalActions.open({ modalComponent: ModalComponents.Signin }));
  }


  public signup(): void {
    this._store.dispatch(ModalActions.open({ modalComponent: ModalComponents.Signup }));
  }
}
