import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyScoresComponent } from './daily-scores.component';

describe('DailyScoresComponent', () => {
  let component: DailyScoresComponent;
  let fixture: ComponentFixture<DailyScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyScoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
