import { Component, OnInit } from '@angular/core';
import { ApiService, Book, Author } from '../api.service'; // Asegúrate de importar Book y Author
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-book-form',
  templateUrl: './control-book-form.component.html',
  styleUrls: ['./control-book-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ControlBookFormComponent implements OnInit {
  book: Partial<Book> = { id: undefined, title: '', publication_date: '', author_id: undefined, image_url: '' };
  authors: Author[] = [];
  isEdit: boolean = false;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.isEdit = true;
      this.apiService.getBookById(+bookId).subscribe(
        data => {
          this.book = { ...data, author_id: data.author.id };
        },
        error => {
          console.error('Error fetching book', error);
        }
      );
    }

    this.apiService.getAuthors().subscribe(
      data => {
        this.authors = data;
      },
      error => {
        console.error('Error fetching authors', error);
      }
    );
  }

  saveBook(): void {
    if (this.isEdit) {
      this.apiService.updateBook({ ...this.book, author: { id: this.book.author_id! } as Author } as Book).subscribe(() => {
        this.router.navigate(['/control/books']);
      }, error => {
        console.error('Error updating book', error);
      });
    } else {
      this.apiService.createBook({ ...this.book, author: { id: this.book.author_id! } as Author } as Book).subscribe(() => {
        this.router.navigate(['/control/books']);
      }, error => {
        console.error('Error creating book', error);
      });
    }
  }
}
