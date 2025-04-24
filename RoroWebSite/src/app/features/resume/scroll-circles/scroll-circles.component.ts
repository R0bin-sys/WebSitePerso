import {
  Component,
  ElementRef,
  OnInit,
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
  noise2D: any;

  constructor(private readonly sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const nbCircles: number = 1500;
    const ceiling: number = 100;
    const floor: number = 0;
    let step: number = 1;
    let pctCircle: number = 0;

    this.noise2D = createNoise2D();

    for (let index: number = 0; index < nbCircles; index++) {
      this.addCircle(pctCircle, index);
      //Le cercle est-il une étape (tous les 250 cercles)
      if (index % 250 === 0 && index !== 0) {
        this.addStepCircle(pctCircle, index);
        }
        
        // Gestion du pourcentage de la couleur du cercle
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

    //   Ajout du simplexNoise
    const c1 = this.noise2D(index * 0.003, index * 0.0033);
    const c2 = this.noise2D(index * 0.002, index * 0.001);

    circleDiv.style.transform = `
        translate(${c2 * 50}px)
        rotate(${c2 * 400}deg) 
        scale(${3 + c1 * 3}, ${3 + c2 * 2})
        `;

    //Couleur du cercle
    circleDiv.style.boxShadow = `0 0 0 .5px color-mix(in srgb, #00df82 ${pctCircle}%, #081616)`;

    // Ajout du cercle au contenu
    this.addElementToMainContainer(circleDiv);
  }

  private addElementToMainContainer(circleDiv: HTMLDivElement) {
    const element = this.mainContainer();
    element?.nativeElement.appendChild(circleDiv);

    this.circlesHtml = this.sanitizer.bypassSecurityTrustHtml(
      element?.nativeElement.outerHTML ?? ''
    );
  }

  private addStepCircle(pctCircle: number, index: number) {
    //   Création du cercle
    let circleDiv = document.createElement('div');
    circleDiv.classList.add('step-circle', 'circle');

    // Ajout du cercle au contenu
    this.addElementToMainContainer(circleDiv);
  }
}
