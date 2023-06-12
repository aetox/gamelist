import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovielistComponent } from './movielist/movielist.component';
import { MovielistHeaderComponent } from './movielist/movielist-header/movielist-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, MovielistComponent,MovielistHeaderComponent],
  template: `
  <app-movielist-header />
  <router-outlet />
  `
  })
export class AppComponent {
  title = 'gamelist';
}
