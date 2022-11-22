import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyScoresTableItemComponent } from './daily-scores-table-item.component';

describe('DailyScoresTableItemComponent', () => {
  let component: DailyScoresTableItemComponent;
  let fixture: ComponentFixture<DailyScoresTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyScoresTableItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyScoresTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
