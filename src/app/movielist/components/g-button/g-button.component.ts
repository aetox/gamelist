import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-g-button',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './g-button.component.html',
  styleUrls: ['./g-button.component.scss']
})


export class GButtonComponent {

}
