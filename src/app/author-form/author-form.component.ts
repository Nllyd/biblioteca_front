import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css'],
  standalone: true,
  imports: [RouterModule, FormsModule] // Agregar FormsModule aquí
})
export class AuthorFormComponent {
  author = { name: '', birth_date: '' };

  constructor(private apiService: ApiService, private router: Router) {}

  addAuthor(): void {
    this.apiService.addAuthor(this.author).subscribe(() => {
      this.router.navigate(['/authors']);
    });
  }
}
