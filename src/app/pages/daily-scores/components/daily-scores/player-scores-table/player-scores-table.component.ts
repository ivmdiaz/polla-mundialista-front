import { Component, Input, OnInit } from '@angular/core';
import { MatchDailyScores, Score } from '../../../interfaces/daily-score.interface';

@Component({
  selector: 'app-player-scores-table',
  templateUrl: './player-scores-table.component.html',
  styleUrls: ['./player-scores-table.component.scss']
})
export class PlayerScoresTableComponent implements OnInit {

  @Input() datasource: MatchDailyScores | undefined;


  constructor() { }

  ngOnInit(): void {
  }

  get scores(): Score[] {
    let result: Score[] = [];
    if (this.datasource) {
      result = this.datasource.scores.filter(item => item.player.id ? true : false);
    }
    return result;
  }
}
