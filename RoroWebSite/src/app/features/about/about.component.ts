import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GraphicChartComponent } from '../graphic-chart/graphic-chart.component';
import { SourcesComponent } from '../sources/sources.component';

@Component({
  selector: 'app-about',
    imports: [
        CommonModule,
        GraphicChartComponent,
        SourcesComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
