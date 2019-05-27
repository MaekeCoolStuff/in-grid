import { Component } from '@angular/core';
import { Game } from './interfaces/game.interface';
import { IInGridConfig } from './in-grid/interfaces/IInGridConfig';

let games: Game[] = [
  {
    title: 'Team Sonic Racing',
    platform: 'Playstation',
    releaseDate: new Date(2019, 4, 28)
  },
  {
    title: 'Life is Strange 2',
    platform: 'PC',
    releaseDate: new Date(2019, 5, 17)
  },
  {
    title: 'Animal Crossing',
    platform: 'Nintendo Switch',
    releaseDate: new Date(2019, 9, 28)
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'in-grid';
  config: IInGridConfig<Game> = {
    data: games,
    columns: [
      {
        key: 'title',
        label: 'Game',
        transform: null,
        value: (game: Game) => game.title
      },
      {
        key: 'platform',
        label: 'Platform',
        transform: null,
        value: (game: Game) => game.platform
      },
      {
        key: 'releaseDate',
        label: 'Release Date',
        transform: null,
        value: (game: Game) => game.releaseDate.toDateString()
      }
    ],
    sortData: {
      sortColumn: 'title',
      sortDirection: 'ASC'
    }
  };
}
