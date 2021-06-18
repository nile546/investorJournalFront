import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tr-crypto-deals',
  templateUrl: './crypto-deals.component.html',
  styleUrls: ['./crypto-deals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoDealsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
