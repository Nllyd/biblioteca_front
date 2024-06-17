import { Component, OnInit } from '@angular/core';
import { ApiService, Author } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-author-form',
  templateUrl: './control-author-form.component.html',
  styleUrls: ['./control-author-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ControlAuthorFormComponent implements OnInit {
  author: Partial<Author> = { id: undefined, name: '', birth_date: '', image_url: '' };
  isEdit: boolean = false;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const authorId = this.route.snapshot.paramMap.get('id');
    if (authorId) {
      this.isEdit = true;
      this.apiService.getAuthorById(+authorId).subscribe(
        data => {
          this.author = data;
        },
        error => {
          console.error('Error fetching author', error);
        }
      );
    }
  }

  saveAuthor(): void {
    if (this.isEdit) {
      this.apiService.updateAuthor(this.author as Author).subscribe(
        response => {
          this.router.navigate(['/control/authors']);
        },
        error => {
          console.error('Error updating author', error);
        }
      );
    } else {
      this.apiService.createAuthor(this.author as Author).subscribe(
        response => {
          this.router.navigate(['/control/authors']);
        },
        error => {
          console.error('Error creating author', error);
        }
      );
    }
  }
}
