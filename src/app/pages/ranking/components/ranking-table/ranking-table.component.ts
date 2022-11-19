import { Component, Input, OnInit } from '@angular/core';
import { RankingPlayer } from '../../interfaces/ranking-player.interface';

@Component({
  selector: 'app-ranking-table',
  templateUrl: './ranking-table.component.html',
  styleUrls: ['./ranking-table.component.scss']
})
export class RankingTableComponent implements OnInit {

  @Input() datasource: RankingPlayer[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
