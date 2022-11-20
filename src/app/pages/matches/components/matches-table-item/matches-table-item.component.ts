import { Match } from './../../interfaces/match.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches-table-item',
  templateUrl: './matches-table-item.component.html',
  styleUrls: ['./matches-table-item.component.scss']
})
export class MatchesTableItemComponent implements OnInit {

  @Input() item: Match | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
