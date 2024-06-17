import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withDebugTracing, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthorListComponent } from './author-list/author-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { ControlComponent } from './control/control.component';
import { ControlAuthorListComponent } from './control-author-list/control-author-list.component';
import { ControlAuthorFormComponent } from './control-author-form/control-author-form.component';
import { ControlBookListComponent } from './control-book-list/control-book-list.component';
import { ControlBookFormComponent } from './control-book-form/control-book-form.component';

const appRoutes: Routes = [
  { path: 'authors', component: AuthorListComponent },
  { path: 'books', component: BookListComponent },
  { path: 'control', component: ControlComponent, children: [
    { path: 'authors', component: ControlAuthorListComponent },
    { path: 'authors/add', component: ControlAuthorFormComponent },
    { path: 'authors/edit/:id', component: ControlAuthorFormComponent },
    { path: 'books', component: ControlBookListComponent },
    { path: 'books/add', component: ControlBookFormComponent },
    { path: 'books/edit/:id', component: ControlBookFormComponent },
  ]},
  { path: '', redirectTo: '/authors', pathMatch: 'full' }
];

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule, FormsModule, CommonModule),
    provideRouter(appRoutes, withDebugTracing())
  ]
};
