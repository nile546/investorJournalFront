import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tr-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PredictComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
