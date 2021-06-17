import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tr-stock-deal-details',
  templateUrl: './stock-deal-details.component.html',
  styleUrls: ['./stock-deal-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockDealDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
