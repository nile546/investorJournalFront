import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ModalActions } from 'src/app/store/modal/modal.actions';
import { State } from 'src/app/store/root.reducer';


@Component({
  selector: 'tr-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {

  constructor(
    private _store: Store<State>
  ) { }

  ngOnInit(): void {
  }

  public registration(): void {
    this._store.dispatch(ModalActions.show());
  }
}
