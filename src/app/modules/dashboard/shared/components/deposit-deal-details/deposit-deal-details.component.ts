import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tr-deposit-deal-details',
  templateUrl: './deposit-deal-details.component.html',
  styleUrls: ['./deposit-deal-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepositDealDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
