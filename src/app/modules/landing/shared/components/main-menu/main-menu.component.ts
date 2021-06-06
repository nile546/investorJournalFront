import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AuthSelectors } from 'src/app/modules/auth/store/user/auth.selectors';
import { User } from 'src/app/shared/models/user/user.model';


@Component({
  selector: 'tr-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainMenuComponent implements OnInit {

  public currentUser: Observable<User | null> | undefined;

  constructor(
    private _store: Store,
  ) { }

  ngOnInit(): void {
    this.currentUser = this._store.select(AuthSelectors.currentUser);
  }
}
