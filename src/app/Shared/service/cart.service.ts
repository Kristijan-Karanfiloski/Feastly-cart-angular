import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  totalAmount$ = this.cartItems$.pipe(
    map((items) =>
      Number(
        Number(items.reduce((acc, item) => acc + item.price, 0)).toFixed(2)
      )
    )
  );

  addToCart(item: any) {
    const currentCartItems = this.cartItemsSubject.getValue();
    const updatedCartItems = [
      ...currentCartItems,
      { ...item, id: Math.random() },
    ];
    this.cartItemsSubject.next(updatedCartItems);
  }

  removeFromCart(id: any) {
    const currentCartItems = this.cartItemsSubject.getValue();
    const updatedCartItems = currentCartItems.filter(
      (cartItem) => cartItem.id !== id
    );
    this.cartItemsSubject.next(updatedCartItems);
  }

  clearCart() {
    this.cartItemsSubject.next([]); // empty the cart
  }
}
