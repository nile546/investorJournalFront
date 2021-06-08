import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'tr-stock-deals',
  templateUrl: './stock-deals.component.html',
  styleUrls: ['./stock-deals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockDealsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }
}
