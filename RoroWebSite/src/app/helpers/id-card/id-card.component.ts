import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-id-card',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
  ],
  templateUrl: './id-card.component.html',
  styleUrl: './id-card.component.scss',
})
export class IdCardComponent implements OnInit {
  @Input() public firstName: string = '';
  @Input() public lastName: string = '';

  public readonly myBirthDay: Date = new Date(1999, 11, 29, 0, 0, 0, 0);
  public age?: number;
  @Input() public subTitle: string | null = null;

    private readonly briveMaps = 'https://www.google.com/maps/place/19100+Brive-la-Gaillarde/@45.1450666,1.4731744,13z/data=!3m1!4b1!4m6!3m5!1s0x47f8bd494a823efb:0x405d39260ee76f0!8m2!3d45.1622927!4d1.5267596!16zL20vMDRiamZ2?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D';

  constructor() {}
  ngOnInit(): void {
    this.initAge();
  }

  private initAge() {
    let timeDiff = Math.abs(Date.now() - this.myBirthDay.getTime());
    this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

  goToMaps() {
    window.open(
      this.briveMaps,
      '_blank'
    );
  }
}
