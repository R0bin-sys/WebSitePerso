import {
  Component,
  ElementRef,
  OnInit,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { createNoise2D } from 'simplex-noise';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

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
    const nbCircles: number = 1250;
    const ceiling: number = 100;
    const floor: number = 0;
    let step: number = 1;
    let pctCircle: number = 0;

    this.noise2D = createNoise2D();

    for (let index: number = 0; index < nbCircles; index++) {
      this.addCircle(pctCircle, index);
      const moduloStep = 250;
      //Le cercle est-il une étape (tous les 250 cercles)
      if (index % moduloStep === 0 && index !== 0) {
        this.addStepCircle(pctCircle, index);
      }

      // Gestion du pourcentage de la couleur du cercle
      pctCircle += step;
      if (pctCircle === ceiling || pctCircle === floor) {
        step = -step;
      }
    }

    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit() {
    this.addAnimations();
  }

  private addAnimations() {
    const Circles = document.querySelectorAll('.circle');
    const StepCircles = document.querySelectorAll('.step-circle');
    const Steps = document.querySelectorAll('.step');
    const Lines = document.querySelectorAll('.stepLine');

    // Cercles
    const circleTimeLine = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        start: 'top top',
        end: 'bottom center',
        fastScrollEnd: true,
        preventOverlaps: true,
        toggleActions: 'restart none none reverse',
      },
    });
    Circles.forEach((circle) => {
      circleTimeLine.from(circle, {
        opacity: 0,
      });
    });

    StepCircles.forEach((step_circle) => {
      gsap.from(step_circle, {
        scrollTrigger: {
          trigger: step_circle,
          start: 'top center',
          toggleActions: 'restart none none reverse',
        },
        scale: 0,
        ease: 'back',
      });
    });

    //   Animations des étapes
    Steps.forEach((step) => {
      gsap.from(step, {
        opacity: 0,
        scrollTrigger: {
          trigger: step,
          start: 'top center',
          toggleActions: 'restart none none reverse',
        },
      });
    });

    Lines.forEach((line) => {
      gsap.from(line, {
        opacity: 0,
        x: -100,
        scrollTrigger: {
          trigger: line,
          start: 'top center',
          toggleActions: 'restart none none reverse',
        },
      });
    });
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
    circleDiv.classList.add('step-circle', 'circle2');
    circleDiv.style.transform = `translate(${
      this.noise2D(index * 0.002, index * 0.001) * 50
    }px)`;

    //Ligne de ssépration
    let stepLine = document.createElement('div');
    stepLine.classList.add('stepLine');

    // Ajout du cercle au contenu
    this.addElementToMainContainer(circleDiv);
    this.addElementToMainContainer(stepLine);
  }
}
