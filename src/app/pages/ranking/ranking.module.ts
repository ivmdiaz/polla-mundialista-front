import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { RankingComponent } from './components/ranking/ranking.component';
import { CommonsModule } from 'src/app/shared/commons/commons.module';
import { RankingTableComponent } from './components/ranking-table/ranking-table.component';
import { RankingTableItemComponent } from './components/ranking-table-item/ranking-table-item.component';


@NgModule({
  declarations: [
    RankingComponent,
    RankingTableComponent,
    RankingTableItemComponent
  ],
  imports: [
    CommonsModule,
    RankingRoutingModule
  ],
  exports: [
    RankingComponent
  ]
})
export class RankingModule { }
