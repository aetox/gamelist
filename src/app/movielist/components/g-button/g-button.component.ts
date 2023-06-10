import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-g-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './g-button.component.html',
  styleUrls: ['./g-button.component.scss']
})


export class GButtonComponent {

  btnTitle = "bruh"

}
