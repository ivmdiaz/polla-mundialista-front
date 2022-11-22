import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyScoresTableComponent } from './daily-scores-table.component';

describe('DailyScoresTableComponent', () => {
  let component: DailyScoresTableComponent;
  let fixture: ComponentFixture<DailyScoresTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyScoresTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyScoresTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
