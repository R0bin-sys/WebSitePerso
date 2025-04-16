import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollCirclesComponent } from './scroll-circles.component';

describe('ScrollCirclesComponent', () => {
  let component: ScrollCirclesComponent;
  let fixture: ComponentFixture<ScrollCirclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollCirclesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollCirclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
