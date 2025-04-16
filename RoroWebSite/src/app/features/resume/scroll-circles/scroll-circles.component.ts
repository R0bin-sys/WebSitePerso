import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
    for (let index = 0; index < nbCircles; index++) {
      this.addCircle(index);
    }
  }

  private addCircle(index: number) {
    //   Création du cercle
    let circleDiv = document.createElement('div');
    circleDiv.classList.add('circle');

    //Couleur du cercle
    circleDiv.style.backgroundColor = `hsla(${index}, 70%, 70%, .5)`;

    // Ajout du cercle au contenu
    const element = this.mainContainer();
    element?.nativeElement.appendChild(circleDiv);

    this.circlesHtml = this.sanitizer.bypassSecurityTrustHtml(
      element?.nativeElement.outerHTML ?? ''
    );
  }
}
