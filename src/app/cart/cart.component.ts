import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../Shared/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems$!: Observable<any[]>;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems$ = this.cartService.cartItems$;
  }
}
