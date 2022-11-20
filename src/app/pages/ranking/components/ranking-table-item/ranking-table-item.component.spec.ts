import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingTableItemComponent } from './ranking-table-item.component';

describe('RankingTableItemComponent', () => {
  let component: RankingTableItemComponent;
  let fixture: ComponentFixture<RankingTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingTableItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
