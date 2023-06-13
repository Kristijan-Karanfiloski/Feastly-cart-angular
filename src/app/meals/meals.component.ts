import { Component } from '@angular/core';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
})
export class MealsComponent {
  mealsItems = [
    {
      id: 1,
      name: 'Chicken Parmesan',
      description:
        'Breaded chicken topped with marinara sauce and melted cheese, served with pasta.',
      price: 12.99,
    },
    {
      id: 2,
      name: 'Vegetable Stir-Fry',
      description:
        'Assorted vegetables stir-fried in a savory sauce, served with steamed rice.',
      price: 9.99,
    },
  ];
}
