import { Component } from '@angular/core';
import { ScrollCirclesComponent } from "./scroll-circles/scroll-circles.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-resume',
  imports: [ScrollCirclesComponent, MatIconModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {



}
