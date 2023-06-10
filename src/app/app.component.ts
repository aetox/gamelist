import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MovielistComponent } from './movielist/movielist.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MovielistComponent],
  template: '<app-movielist />'
})
export class AppComponent {
  title = 'gamelist';
}
