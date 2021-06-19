import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'tr-crypto-deal-details',
  templateUrl: './crypto-deal-details.component.html',
  styleUrls: ['./crypto-deal-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoDealDetailsComponent implements OnInit {

  constructor(
    private _store: Store,
  ) { }

  ngOnInit(): void {
  }

}
