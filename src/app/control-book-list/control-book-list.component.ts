import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-control-book-list',
  templateUrl: './control-book-list.component.html',
  styleUrls: ['./control-book-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ControlBookListComponent implements OnInit {
  books: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  deleteBook(id: number): void {
    this.apiService.deleteBook(id).subscribe(() => {
      this.books = this.books.filter(book => book.id !== id);
    });
  }
}
