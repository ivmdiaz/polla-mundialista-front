import { Score } from './../../interfaces/daily-score.interface';
import { Component, Input, OnInit } from '@angular/core';
import { MatchDailyScores } from '../../interfaces/daily-score.interface';

@Component({
  selector: 'app-daily-scores-table-item',
  templateUrl: './daily-scores-table-item.component.html',
  styleUrls: ['./daily-scores-table-item.component.scss']
})
export class DailyScoresTableItemComponent implements OnInit {

  @Input() item: MatchDailyScores | undefined;

  constructor() { }

  ngOnInit(): void {
  }



}
