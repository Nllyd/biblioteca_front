import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule]
})
export class AppComponent {
  title = 'biblioteca-front';
  searchQuery: string = '';

  constructor(private router: Router) {}

  applyFilter(): void {
    const currentUrl = this.router.url.split('?')[0];
    this.router.navigate([currentUrl], { queryParams: { searchQuery: this.searchQuery } });
  }
}
