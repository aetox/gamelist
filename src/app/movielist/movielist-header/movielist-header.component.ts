import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GButtonComponent } from '../components/g-button/g-button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movielist-header',
  standalone: true,
  imports: [CommonModule,GButtonComponent,RouterModule],
  templateUrl: './movielist-header.component.html',
  styleUrls: ['./movielist-header.component.scss']
})


export class MovielistHeaderComponent {

}
