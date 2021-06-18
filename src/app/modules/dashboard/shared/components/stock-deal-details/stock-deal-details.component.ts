import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'tr-stock-deal-details',
  templateUrl: './stock-deal-details.component.html',
  styleUrls: ['./stock-deal-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockDealDetailsComponent implements OnInit {

  public form: FormGroup = new FormGroup({

  });

  constructor() { }

  ngOnInit(): void {
  }


  public create(): void {
    console.log('zzzzzzzzzzzzzzzzzzzzz');
  }

  public cancel(): void {
    console.log('ffffffffffffffffffff');
  }

}
