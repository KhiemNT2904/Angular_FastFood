import { Component, OnInit, Input } from '@angular/core'; // Import Input decorator
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  @Input() foodPageTags?: string[]; // Sửa lại cú pháp @Input()
  tags?: Tag[];

  @Input() justifyContent: string = 'center'; // Thêm thuộc tính justifyContent
  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    if (!this.foodPageTags) this.tags = this.foodService.getAllTags();
  }
}
