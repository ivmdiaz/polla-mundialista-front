import { Component, Input, OnInit } from '@angular/core';
import { RankingPlayer } from '../../interfaces/ranking-player.interface';

@Component({
  selector: 'app-ranking-table-item',
  templateUrl: './ranking-table-item.component.html',
  styleUrls: ['./ranking-table-item.component.scss']
})
export class RankingTableItemComponent implements OnInit {

  @Input() item: RankingPlayer | undefined;
  @Input() position: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
