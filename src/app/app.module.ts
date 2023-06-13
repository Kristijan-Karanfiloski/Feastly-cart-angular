import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { LoginComponent } from './login/login.component';
import { MealsComponent } from './meals/meals.component';
import { MealItemComponent } from './meals/meal-item/meal-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './Shared/modal/modal.component';
import { CartIconComponent } from './Shared/cart-icon/cart-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    CartItemComponent,
    LoginComponent,
    MealsComponent,
    MealItemComponent,
    ModalComponent,
    CartIconComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
