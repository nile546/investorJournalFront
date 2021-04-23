import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ModalSelectors } from 'src/app/store/modal/modal.selectors';


@Component({
  selector: 'tr-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit {

  public isModalOpen: Observable<boolean> | undefined;

  constructor(
    private _store: Store,
  ) { }


  ngOnInit(): void {
    this.isModalOpen = this._store.select(ModalSelectors.isModalOpen);
  }
}
