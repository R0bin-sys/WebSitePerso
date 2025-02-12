import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { openCloseAnimation, appearanceAnimation } from '../../animations';

@Component({
  selector: 'app-graphic-chart',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './graphic-chart.component.html',
  styleUrl: './graphic-chart.component.scss',
  animations: [openCloseAnimation, appearanceAnimation],
})
export class GraphicChartComponent {
  public isOpen: boolean = false;
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
