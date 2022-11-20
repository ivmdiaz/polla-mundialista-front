import { RankingService } from './../../services/ranking.service';
import { Component, OnInit } from '@angular/core';
import { RankingPlayer } from '../../interfaces/ranking-player.interface';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  datasource: RankingPlayer[] = [];

  constructor(service: RankingService) {
    service.getRanking().subscribe(data => this.datasource = data);
  }

  ngOnInit(): void {
  }

}
