import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ResumeComponent } from './features/resume/resume.component';
import { GraphicChartComponent } from './features/graphic-chart/graphic-chart.component';

export const routes: Routes = [
  {
    path: '',
    title: '',
    component: HomeComponent,
  },
  {
    path: 'me',
    component: ResumeComponent,
  },
  {
    path: 'graphics',
    component: GraphicChartComponent,
  },
];
