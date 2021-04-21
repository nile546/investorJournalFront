import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public isModalOpen:Subject<boolean> = new Subject<boolean>();

  constructor() { 

      this.isModalOpen.next(false);

  }



}
