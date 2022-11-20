import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesTableItemComponent } from './matches-table-item.component';

describe('MatchesTableItemComponent', () => {
  let component: MatchesTableItemComponent;
  let fixture: ComponentFixture<MatchesTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchesTableItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchesTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
