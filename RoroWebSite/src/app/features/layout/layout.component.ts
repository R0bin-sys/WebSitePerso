import { Component } from '@angular/core';
import { appearanceAnimation, openCloseAnimation } from '../../animations';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-layout',
  imports: [MatButtonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  animations: [openCloseAnimation, appearanceAnimation],
})
export class LayoutComponent {
  
}
