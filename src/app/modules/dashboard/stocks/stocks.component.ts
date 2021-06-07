import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'tr-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StocksComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }
}
