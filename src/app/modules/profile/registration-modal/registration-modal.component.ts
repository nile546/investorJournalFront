import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Modal } from 'src/app/shared/components/abstract/modal/modal';


@Component({
  selector: 'tr-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationModalComponent implements OnInit {

  constructor() {
    // super();
  }

  ngOnInit(): void {
  }

}
