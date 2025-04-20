import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [RouterModule],
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
