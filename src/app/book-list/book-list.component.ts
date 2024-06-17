import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class BookListComponent implements OnInit, OnChanges {
  books: any[] = [];
  filteredBooks: any[] = [];
  searchQuery: string = '';

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.apiService.getBooks().subscribe(data => {
      this.books = data;
      this.filterBooks();
    });
    
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['searchQuery'] || '';
      this.filterBooks();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchQuery']) {
      this.filterBooks();
    }
  }

  filterBooks(): void {
    this.filteredBooks = this.books.filter(book =>
      book.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
