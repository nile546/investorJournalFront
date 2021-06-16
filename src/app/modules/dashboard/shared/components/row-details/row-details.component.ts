import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tr-row-details',
  templateUrl: './row-details.component.html',
  styleUrls: ['./row-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
