import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { CartItem } from '../../shared/models/CartItem';
import { Food } from '../../shared/models/Food';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find((item) => item.food.id === food.id);
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1); // Gọi đúng tên phương thức
      return;
    }
    this.cart.items.push(new CartItem(food)); // Sử dụng CartItem đúng cách
  }

  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter((item) => item.food.id !== foodId);
  }

  changeQuantity(foodId: number, quantity: number): void {
    // Sửa tên phương thức
    let cartItem = this.cart.items.find((item) => item.food.id === foodId); // Sửa logic tìm kiếm
    if (!cartItem) return;
    cartItem.quantity = quantity; // Sửa lỗi chính tả từ quanity thành quantity
  }

  getCart(): Cart {
    return this.cart;
  }
}
