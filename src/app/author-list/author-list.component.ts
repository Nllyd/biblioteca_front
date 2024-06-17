import { Component, OnInit } from '@angular/core';
import { ApiService, Author, Book } from '../api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule]
})
export class AuthorListComponent implements OnInit {
  authors: Author[] = [];
  filteredAuthors: Author[] = [];
  selectedAuthorBooks: Book[] = [];
  searchQuery: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getAuthors().subscribe(
      data => {
        this.authors = data;
        this.filteredAuthors = data;
      },
      error => {
        console.error('Error fetching authors', error);
      }
    );
  }

  viewBooks(authorId: number): void {
    this.apiService.getBooks().subscribe(
      data => {
        this.selectedAuthorBooks = data.filter(book => book.author.id === authorId);
      },
      error => {
        console.error('Error fetching books', error);
      }
    );
  }
}
