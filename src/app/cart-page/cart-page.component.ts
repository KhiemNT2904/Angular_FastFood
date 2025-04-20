import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { NotFoundComponent } from '../not-found/not-found.component';
@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, RouterModule, NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'], // Sửa styleUrl thành styleUrls
})
export class CartPageComponent implements OnInit {
  cart!: Cart;

  constructor(private cartService: CartService) {
    // Thêm vào giỏ hàng
    this.setCart();
  }

  ngOnInit(): void {}

  removeFromCart(cartItem: CartItem): void {
    this.cartService.removeFromCart(cartItem.food.id);

    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string): void {
    // Sửa tên phương thức
    const quantity = parseInt(quantityInString, 10);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  setCart(): void {
    this.cart = this.cartService.getCart();
  }
}
