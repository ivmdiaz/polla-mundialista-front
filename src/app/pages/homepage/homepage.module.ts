import { MatchesModule } from './../matches/matches.module';
import { RankingModule } from './../ranking/ranking.module';
import { NgModule } from '@angular/core';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CommonsModule } from 'src/app/shared/commons/commons.module';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonsModule,
    HomepageRoutingModule,
    RankingModule,
    MatchesModule
  ]
})
export class HomepageModule { }
