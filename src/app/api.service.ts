import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Author {
  id: number;
  name: string;
  birth_date: string;
  image_url?: string;
}

export interface Book {
  id: number;
  title: string;
  publication_date: string;
  author: Author;
  author_id?: number;
  image_url?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.baseUrl}/authors/`);
  }

  getAuthorById(id: number): Observable<Author> {
    return this.http.get<Author>(`${this.baseUrl}/authors/${id}/`);
  }

  createAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(`${this.baseUrl}/authors/`, author);
  }

  updateAuthor(author: Author): Observable<Author> {
    return this.http.put<Author>(`${this.baseUrl}/authors/${author.id}/`, author);
  }

  deleteAuthor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/authors/${id}/`);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/books/`);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/books/${id}/`);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.baseUrl}/books/`, book);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.baseUrl}/books/${book.id}/`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/books/${id}/`);
  }
}
