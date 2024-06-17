import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-control-author-list',
  templateUrl: './control-author-list.component.html',
  styleUrls: ['./control-author-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ControlAuthorListComponent implements OnInit {
  authors: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAuthors().subscribe(data => {
      this.authors = data;
    });
  }

  deleteAuthor(id: number): void {
    this.apiService.deleteAuthor(id).subscribe(() => {
      this.authors = this.authors.filter(author => author.id !== id);
    });
  }
}
