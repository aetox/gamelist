import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovielistHeaderComponent } from './movielist-header/movielist-header.component';
import { MovielistListComponent } from './movielist-list/movielist-list.component';
import { MovielistGamecardComponent } from './movielist-gamecard/movielist-gamecard.component';

@Component({
  selector: 'app-movielist',
  standalone: true,
  imports: [CommonModule,MovielistListComponent,MovielistGamecardComponent,MovielistHeaderComponent],
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent {

}
