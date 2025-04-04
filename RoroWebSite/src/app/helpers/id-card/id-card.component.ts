import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-id-card',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatCardModule, MatTooltipModule],
  templateUrl: './id-card.component.html',
  styleUrl: './id-card.component.scss',
})
export class IdCardComponent implements OnInit {
  @Input() public firstName: string = '';
  @Input() public lastName: string = '';

  public readonly myBirthDay: Date = new Date(1999, 11, 29, 0, 0, 0, 0);
  public age?: number;
  @Input() public subTitle: string | null = null;

  constructor() {}
  ngOnInit(): void {
    this.initAge();
  }

  private initAge() {
    let timeDiff = Math.abs(Date.now() - this.myBirthDay.getTime());
    this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }
}
