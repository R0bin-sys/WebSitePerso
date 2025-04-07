import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { WavesWrapperComponent } from '../react/waves/WavesWrapper';
import { IdCardComponent } from '../../helpers/id-card/id-card.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    WavesWrapperComponent,
    IdCardComponent,
    MatTooltipModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {
  //   #region Variables

  public socials: Social[] = [
    {
      name: 'LinkedIn',
      icon: 'linkedIn',
      redirectLink: 'https://www.linkedin.com/in/martresrobin/',
    },
    {
      name: 'GitHub',
      icon: 'gitHub',
      redirectLink: 'https://github.com/R0bin-sys',
    },
  ];

  //#endregion Variables

  // MARK: CONSTRUCTOR
  constructor() {}

  /**
   *
   * @param url
   */
  redirectTo(url: string) {
    window.open(url, '_blank');
  }
}

export interface Social {
  name: string;
  icon: string;
  redirectLink: string;
}
