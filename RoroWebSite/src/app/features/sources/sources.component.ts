import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sources',
  imports: [],
  templateUrl: './sources.component.html',
  styleUrl: './sources.component.scss',
})
export class SourcesComponent implements OnInit {
  //#region Variables

  public sourceList: Source[] = [];

  //#endregion Variables
  ngOnInit(): void {
    this.loadSources();
  }

  private loadSources() {
    //TODO: La charger depuis un appel externe
    this.sourceList = [
      {
        url: 'https://mistral.ai/en/news/le-chat-mistral',
        name: 'Mistral AI : Le Chat',
        description: "Discussion et génération d'IA",
      },
      {
        url: 'https://angular.dev/',
        name: 'Angular.Dev',
        description: '',
      },
      {
        url: 'https://dribbble.com/',
        name: 'Dribble',
        description: 'Inspiration de designs',
      },
      {
          url: 'https://feathericons.com/?query=linked',
          name: 'Feather Icons',
          description: 'Icônes open source'
      },
    ];

    let index = 0;
    this.sourceList.forEach((source) => {
      source.id = index;
      index++;
    });
  }
}

export interface Source {
  /**
   * Numéro de la source
   */
  id?: number;
  /**
   * Url
   */
  url: string;
  /**
   * Nom
   */
  name: string;
  /**
   * Petite description
   */
  description?: string;
}
