import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { createNoise2D } from 'simplex-noise';

/**
 * Cv avec effet de cercles évoluant
 * Copié ici : https://www.tiktok.com/@paulcode_/video/7121378865976544517
 */
@Component({
  selector: 'app-scroll-circles',
  imports: [],
  templateUrl: './scroll-circles.component.html',
  styleUrl: './scroll-circles.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ScrollCirclesComponent implements OnInit {
  mainContainer = viewChild<ElementRef<HTMLElement>>('mainContainer');
  circlesHtml!: SafeHtml;

  constructor(private readonly sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const nbCircles = 1500;
    const ceiling = 100;
    const floor = 0;
    let step = 1;
    let pctCircle = 0;

    for (let index = 0; index < nbCircles; index++) {
      this.addCircle(pctCircle, index);
      pctCircle += step;
      if (pctCircle === ceiling || pctCircle === floor) {
        step = -step;
      }
    }
  }

  private addCircle(pctCircle: number, index: number) {
    //   Création du cercle
    let circleDiv = document.createElement('div');
    circleDiv.classList.add('circle');

    const noise2D = createNoise2D();
    const c1 = noise2D(index * 0.002, index * 0.002);

      const translate = c1 * 50;
      console.log(translate);
      
    circleDiv.style.transform = `translate(${translate}px)`;

    //Couleur du cercle
    circleDiv.style.backgroundColor = `color-mix(in srgb, #00df82 ${pctCircle}%, #081616)`;

    // Ajout du cercle au contenu
    const element = this.mainContainer();
    element?.nativeElement.appendChild(circleDiv);

    this.circlesHtml = this.sanitizer.bypassSecurityTrustHtml(
      element?.nativeElement.outerHTML ?? ''
    );
  }
}
