import { Component} from '@angular/core';
import { StoreService } from '../../services/store/store.service';

@Component({
  selector: 'tr-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(
    public storeService: StoreService
  ) { }
  
}
