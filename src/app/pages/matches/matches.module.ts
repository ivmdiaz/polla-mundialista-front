import { NgModule } from '@angular/core';

import { MatchesRoutingModule } from './matches-routing.module';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { MatchesTableItemComponent } from './components/matches-table-item/matches-table-item.component';
import { CommonsModule } from 'src/app/shared/commons/commons.module';


@NgModule({
  declarations: [
    MatchesComponent,
    MatchesTableComponent,
    MatchesTableItemComponent
  ],
  imports: [
    CommonsModule,
    MatchesRoutingModule,
  ],
  exports: [
    MatchesComponent
  ]
})
export class MatchesModule { }
