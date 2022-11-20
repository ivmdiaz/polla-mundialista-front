import { Component, OnInit } from '@angular/core';
import { Match } from '../../interfaces/match.interface';
import { MatchesService } from '../../services/matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  datasource: Match[] = [];

  constructor(private service: MatchesService) {
    this.service.getMatches().subscribe(data => this.datasource = data);
  }

  ngOnInit(): void {
  }

}
