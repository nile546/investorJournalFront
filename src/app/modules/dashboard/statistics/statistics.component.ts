import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tr-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
