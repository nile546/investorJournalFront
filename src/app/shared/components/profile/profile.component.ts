import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { StoreService } from '../../services/store/store.service';


@Component({
  selector: 'tr-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {

  constructor(
    private _storeService: StoreService,
  ) { }

  ngOnInit(): void {
  }

  public registration(): void {
    this._storeService.isModalOpen.next(true);
  }
}
