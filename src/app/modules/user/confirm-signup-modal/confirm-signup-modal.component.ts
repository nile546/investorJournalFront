import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Modal } from 'src/app/shared/components/abstract/modal/modal';

@Component({
  selector: 'tr-confirm-signup-modal',
  templateUrl: './confirm-signup-modal.component.html',
  styleUrls: ['./confirm-signup-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmSignupModalComponent extends Modal {

  constructor() {
    super();
  }

  ngOnInit(): void {
    
  }

}
