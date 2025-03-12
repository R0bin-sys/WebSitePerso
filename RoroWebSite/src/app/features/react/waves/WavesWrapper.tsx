import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import Waves from "./Waves";
import * as React from "react";

import * as ReactDOM from "react-dom";

const containerElementName = "wavesContainer";

@Component({
  selector: "app-react-waves",
  template: `<span #${containerElementName}></span>`,
  styleUrls: ["./Waves.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class WavesWrapperComponent
  implements OnChanges, OnDestroy, AfterViewInit
{
  @ViewChild(containerElementName, { static: false })
  containerRef!: ElementRef;

  @Output() public componentClick = new EventEmitter<void>();

  constructor() {
    window.React = React;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
  }

  private render() {
    ReactDOM.render(
      <div className="position container">
        <Waves
          lineColor="#03624c"
          backgroundColor="#081616"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>,
      this.containerRef.nativeElement
    );
  }
}
