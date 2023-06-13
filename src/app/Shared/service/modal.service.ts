import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private displayModalSubject = new BehaviorSubject<boolean>(false);
  displayModal$ = this.displayModalSubject.asObservable();

  showModal() {
    console.log('showModal() called');
    this.displayModalSubject.next(true);
  }

  hideModal() {
    console.log('hideModal() called');
    this.displayModalSubject.next(false);
  }
}
