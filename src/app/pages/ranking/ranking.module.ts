import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { RankingComponent } from './components/ranking/ranking.component';
import { CommonsModule } from 'src/app/shared/commons/commons.module';
import { RankingTableComponent } from './components/ranking-table/ranking-table.component';


@NgModule({
  declarations: [
    RankingComponent,
    RankingTableComponent
  ],
  imports: [
    CommonsModule,
    RankingRoutingModule
  ]
})
export class RankingModule { }
