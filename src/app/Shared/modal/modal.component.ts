import { Component, OnInit } from '@angular/core';
import { ModalService } from '../service/modal.service';
import { Observable } from 'rxjs';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  displayModal$: Observable<boolean>;
  cartItems$: Observable<any[]>;
  totalAmount$: Observable<number>;

  constructor(
    public modalService: ModalService,
    private cartService: CartService
  ) {
    this.displayModal$ = modalService.displayModal$;
    this.cartItems$ = cartService.cartItems$;
    this.totalAmount$ = cartService.totalAmount$;
  }

  ngOnInit() {}

  onClickClose() {
    this.modalService.hideModal();
  }

  onBackdropClick() {
    this.modalService.hideModal();
  }

  removeItem(id: any) {
    this.cartService.removeFromCart(id);
  }

  onClickClearCart() {
    this.cartService.clearCart();
  }
}
