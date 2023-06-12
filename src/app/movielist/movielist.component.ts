import { ChangeDetectionStrategy, Component, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovielistHeaderComponent } from './movielist-header/movielist-header.component';
import { MovielistListComponent } from './movielist-list/movielist-list.component';
import { MovielistGamecardComponent } from './movielist-gamecard/movielist-gamecard.component';
import { Game } from './types/game.type';

@Component({
  selector: 'app-movielist',
  standalone: true,
  imports: [CommonModule,MovielistListComponent,MovielistGamecardComponent,MovielistHeaderComponent],
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class MovielistComponent {

  games = signal<Game[]>([
    {
      id:0,
      title:"Call of Duty 4 : Modern Warfare",
      img:"cod4.jpg",
      console: ["PC", "PlayStation", "Xbox"],
      description:"Call of Duty 4: Modern Warfare est un jeu de tir à la première personne sorti en 2007. Il se déroule dans un cadre moderne, mettant en scène des conflits fictifs inspirés par des événements réels. Le jeu offre une campagne captivante, divisée en différentes missions à travers le monde, où les joueurs incarnent plusieurs personnages pour contrer les menaces terroristes. Call of Duty 4: Modern Warfare est connu pour son gameplay intense, ses graphismes impressionnants et son multijoueur en ligne compétitif."
    },
    {
      id:1,
      title:"Call of Duty 5 : World at War",
      img:"cod5.jpg",
      console: ["PC", "PlayStation", "Xbox"],
      description:"Call of Duty 5: World at War, sorti en 2008, ramène les joueurs à la Seconde Guerre mondiale. Le jeu propose une campagne basée sur des événements réels, avec des missions dans le Pacifique et sur le front de l'Est. Les joueurs affrontent des ennemis redoutables dans des environnements variés, allant des jungles infestées de guérilla aux villes dévastées par les combats. Call of Duty 5: World at War se distingue par son atmosphère sombre, son gameplay immersif et son mode multijoueur coopératif."
    }
  ]);

  selectedGame: Game | undefined;

selectGame(gameId: number) {
  const gamesArray = this.games();

  if (gamesArray) {
    this.selectedGame = gamesArray.find(game => game.id === gameId);
  }
}

}
