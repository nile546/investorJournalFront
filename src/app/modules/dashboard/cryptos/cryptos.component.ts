import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tr-cryptos',
  templateUrl: './cryptos.component.html',
  styleUrls: ['./cryptos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
