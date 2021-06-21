import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Result, ResultStatuses } from 'src/app/shared/models/result/result.model';
import { ModalActions } from 'src/app/store/modal/modal.actions';

@Component({
  selector: 'tr-tinkoff-update-modal',
  templateUrl: './tinkoff-update-modal.component.html',
  styleUrls: ['./tinkoff-update-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TinkoffUpdateModalComponent implements OnInit {

  public token: FormControl = new FormControl('');
  public result: Result | undefined;
  public resultStatusesEnum = ResultStatuses

  constructor(
    private _store: Store,
  ) { }

  ngOnInit(): void {
    this.token.valueChanges.pipe(

    )
      .subscribe((value) => {
        console.log('zzzzzzzzzzzzzzzzzzzzzzzzzz', value);
      })

  }

  public load(): void {
    console.log('zzzzzzzzzzzzzzzz')
  }


  public close(): void {
    this._store.dispatch(ModalActions.close());
  }
}
