import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-author-books',
  templateUrl: './author-books.component.html',
  styleUrls: ['./author-books.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AuthorBooksComponent implements OnInit {
  books: any[] = [];
  authorId: number | null = null;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const authorIdParam = this.route.snapshot.paramMap.get('id');
    if (authorIdParam) {
      this.authorId = +authorIdParam;
      this.apiService.getBooks().subscribe(data => {
        this.books = data.filter(book => book.author.id === this.authorId);
      });
    }
  }
}
