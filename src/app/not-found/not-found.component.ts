import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent implements OnInit {
  @Input() visible: boolean = false;
  @Input() notFoundMessage: string = 'Not Found!';
  @Input() resetLinkText: string = 'Reset';
  @Input() resetLinkRoute: string = '/';
  constructor() {}

  ngOnInit(): void {}
}
