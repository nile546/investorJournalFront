import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'tr-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent {

  @Input() public loading: boolean | null = false;

  constructor() { }
}
