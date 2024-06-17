import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
  standalone: true,
  imports: [RouterModule, FormsModule] // Agregar FormsModule aquí
})
export class BookFormComponent implements OnInit {
  book = { title: '', publication_date: '', author: '' };
  authors: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getAuthors().subscribe(data => {
      this.authors = data;
    });
  }

  addBook(): void {
    this.apiService.addBook(this.book).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }
}
