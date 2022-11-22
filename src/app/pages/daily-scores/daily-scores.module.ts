import { NgModule } from '@angular/core';

import { DailyScoresRoutingModule } from './daily-scores-routing.module';
import { DailyScoresComponent } from './components/daily-scores/daily-scores.component';
import { DailyScoresTableComponent } from './components/daily-scores-table/daily-scores-table.component';
import { DailyScoresTableItemComponent } from './components/daily-scores-table-item/daily-scores-table-item.component';
import { CommonsModule } from 'src/app/shared/commons/commons.module';
import { PlayerScoresTableComponent } from './components/daily-scores/player-scores-table/player-scores-table.component';


@NgModule({
  declarations: [
    DailyScoresComponent,
    DailyScoresTableComponent,
    DailyScoresTableItemComponent,
    PlayerScoresTableComponent
  ],
  imports: [
    CommonsModule,
    DailyScoresRoutingModule
  ],
  exports: [
    DailyScoresComponent
  ]
})
export class DailyScoresModule { }
