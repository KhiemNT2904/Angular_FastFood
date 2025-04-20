import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { TagsComponent } from '../tags/tags.component';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart/cart.service';
import { Router } from '@angular/router'; // Import Router
import { NotFoundComponent } from '../not-found/not-found.component'; // Import NotFoundComponent
@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule, TagsComponent, NotFoundComponent], // Thêm CommonModule vào imports
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css',
})
export class FoodPageComponent implements OnInit {
  food!: Food; // Thay đổi kiểu dữ liệu thành Food
  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) this.food = foodService.getFoodById(params['id']);
    });
  }

  ngOnInit(): void {}
  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page'); // Chuyển hướng đến trang giỏ hàng
  }
}
