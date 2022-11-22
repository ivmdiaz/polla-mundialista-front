import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerScoresTableComponent } from './player-scores-table.component';

describe('PlayerScoresTableComponent', () => {
  let component: PlayerScoresTableComponent;
  let fixture: ComponentFixture<PlayerScoresTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerScoresTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerScoresTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
