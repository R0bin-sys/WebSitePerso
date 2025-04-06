import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './features/layout/layout.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Robin.MARTRES.dev';

  constructor(
    private readonly matIconRegistery: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer
  ) {
    this.initIconRegistery();
  }

  /**
   * Initialise le matIconRegistery avec les icônes personnalisés
   */
  private initIconRegistery() {
    this.matIconRegistery.addSvgIcon(
      'linkedIn',
      this.domSanitizer.bypassSecurityTrustResourceUrl('icons/linkedin.svg')
    );
    this.matIconRegistery.addSvgIcon(
      'gitHub',
      this.domSanitizer.bypassSecurityTrustResourceUrl('icons/github.svg')
    );
  }
}
