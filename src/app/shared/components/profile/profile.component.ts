import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store/store.service';

@Component({
  selector: 'tr-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private _storeService:StoreService,
  ) { }

  ngOnInit(): void {
  }

  public registration(): void{
    console.log("111");

    this._storeService.isModalOpen.next(true);

  }

}
