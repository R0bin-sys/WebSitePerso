import { Component } from '@angular/core';
import { appearanceAnimation, openCloseAnimation } from '../../animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-layout',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  animations: [openCloseAnimation, appearanceAnimation],
})
export class LayoutComponent {
  
}
