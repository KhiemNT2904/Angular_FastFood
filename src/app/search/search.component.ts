import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Thêm import
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true, // Xác nhận standalone
  imports: [FormsModule], // Thêm FormsModule
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'], // Sửa styleUrl thành styleUrls
})
export class SearchComponent {
  searchTerm: string = ''; // Sửa String thành string

  constructor(private router: Router) {} // Loại bỏ ActivatedRoute vì không cần

  search(): void {
    if (this.searchTerm.trim()) {
      this.router.navigate(['search', this.searchTerm]); // Dùng navigate thay vì navigateByUrl
    }
  }
}
