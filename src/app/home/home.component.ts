import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { StarRatingModule, StarRatingConfigService } from 'angular-star-rating';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { TagsComponent } from '../tags/tags.component'; // Import TagsComponent
import { NotFoundComponent } from '../not-found/not-found.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    StarRatingModule,
    SearchComponent,
    TagsComponent,
    NotFoundComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [StarRatingConfigService],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchTerm'])
        this.foods = this.foodService.getAllFoodsBySearchTerm(
          params['searchTerm']
        );
      else if (params['tag'])
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      else this.foods = this.foodService.getAll();
    });
  }

  onRatingChange(event: any, food: Food): void {
    food.stars = event.rating; // Cập nhật giá trị xếp hạng
  }
}
