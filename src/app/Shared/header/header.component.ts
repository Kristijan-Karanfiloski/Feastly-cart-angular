import { Component, OnInit } from '@angular/core';
import { ModalService } from '../service/modal.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  displayModal$ = this.modalService.displayModal$;
  items: number = 0;

  constructor(
    private modalService: ModalService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe(
      (items) => (this.items = items.length)
    );
  }

  navigateToCart() {
    console.log('navigateToCart() called');
    this.modalService.showModal();
  }
}
