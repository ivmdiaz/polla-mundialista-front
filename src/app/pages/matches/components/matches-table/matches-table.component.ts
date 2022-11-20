import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Match } from '../../interfaces/match.interface';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.scss']
})
export class MatchesTableComponent implements OnInit {

  @Input() datasource: Match[] | undefined;

  date: Date;
  datasource_visible: Match[] | undefined;

  minDate: Date;
  maxDate: Date;

  constructor() {
    this.minDate = new Date('2022-11-20T00:00:00.000Z');
    this.maxDate = new Date('2022-12-18T00:00:00.000Z');
    this.date = new Date();
  }

  ngOnInit(): void {
    this.selectedDate({ value: this.date })
  }

  selectedDate(newDate: any) {
    this.date = newDate.value;
    if (this.datasource) {
      this.datasource_visible = this.datasource.filter((item: Match) => {
        let compareDate1 = new Date(item.date).setHours(0, 0, 0, 0);
        let compareDate2 = new Date(this.date).setHours(0, 0, 0, 0);
        return compareDate1 == compareDate2;
      })
    }

  }
}

