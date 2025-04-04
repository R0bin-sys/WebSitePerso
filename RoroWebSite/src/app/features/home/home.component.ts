import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SourcesComponent } from '../sources/sources.component';
import { WavesWrapperComponent } from '../react/waves/WavesWrapper';
import { IdCardComponent } from '../../helpers/id-card/id-card.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    WavesWrapperComponent,
    IdCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {
  
}
