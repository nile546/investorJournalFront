import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ModalActions } from 'src/app/store/modal/modal.actions';
import { ModalState } from 'src/app/store/modal/modal.reducer';


@Component({
  selector: 'tr-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {

  constructor(
    private _store: Store<ModalState>
  ) { }

  ngOnInit(): void {
  }

  public registration(): void {
    this._store.dispatch(ModalActions.show());
  }
}
