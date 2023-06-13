import { Component, Input } from '@angular/core';
import { CartService } from '../../Shared/service/cart.service';

@Component({
  selector: 'app-meal-item',
  templateUrl: './meal-item.component.html',
  styleUrls: ['./meal-item.component.css'],
})
export class MealItemComponent {
  @Input() meal: any;
  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.meal);
  }
}
