import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-movielist-add-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './movielist-add-form.component.html',
  styleUrls: ['./movielist-add-form.component.scss']
})
export class MovielistAddFormComponent {

  newGame = new FormGroup({
    title: new FormControl(''),
    img: new FormControl(''),
    description: new FormControl(''),
    console: new FormControl('')
  });

}
