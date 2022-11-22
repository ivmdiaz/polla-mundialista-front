import { TestBed } from '@angular/core/testing';

import { DailyScoresService } from './daily-scores.service';

describe('DailyScoresService', () => {
  let service: DailyScoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyScoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
