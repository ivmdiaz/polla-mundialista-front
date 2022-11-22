import { DailyScoresService } from './../../services/daily-scores.service';
import { Component, OnInit } from '@angular/core';
import { MatchDailyScores } from '../../interfaces/daily-score.interface';

@Component({
  selector: 'app-daily-scores',
  templateUrl: './daily-scores.component.html',
  styleUrls: ['./daily-scores.component.scss']
})
export class DailyScoresComponent implements OnInit {

  datasource: MatchDailyScores[] = [];

  constructor(private service: DailyScoresService) {
    this.service.getDailyScores().subscribe(data => this.datasource = data);
  }

  ngOnInit(): void {
  }

}
