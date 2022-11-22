import { MatchDailyScores } from './../../interfaces/daily-score.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-scores-table',
  templateUrl: './daily-scores-table.component.html',
  styleUrls: ['./daily-scores-table.component.scss']
})
export class DailyScoresTableComponent implements OnInit {

  @Input() datasource: MatchDailyScores[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
