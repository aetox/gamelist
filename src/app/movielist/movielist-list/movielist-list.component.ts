import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../types/game.type';

@Component({
  selector: 'app-movielist-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movielist-list.component.html',
  styleUrls: ['./movielist-list.component.scss']
})


export class MovielistListComponent {
  @Input() game!: Game;
  @Output() gameSelected = new EventEmitter<number>();

  selectedGameId: number | null = null;

  selectGame(gameId: number) {
    this.gameSelected.emit(gameId);
  }
}

