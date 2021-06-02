import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tr-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
