import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../types/game.type';

@Component({
  selector: 'app-movielist-gamecard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movielist-gamecard.component.html',
  styleUrls: ['./movielist-gamecard.component.scss']
})
export class MovielistGamecardComponent {
  
  @Input() game!: Game;

  getPlatformLogo(platform: string): string {
    switch (platform) {
      case 'Nintendo':
        return 'nintendo.png';
      case 'PlayStation':
        return 'playstation.png';
      case 'Xbox':
        return 'xbox.png';
      case 'PC':
        return 'pc.png'
      default:
        return 'default.png';
    }
  }

}
