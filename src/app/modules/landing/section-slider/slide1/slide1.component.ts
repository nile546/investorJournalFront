import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'tr-slide1',
  templateUrl: './slide1.component.html',
  styleUrls: ['./slide1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Slide1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
