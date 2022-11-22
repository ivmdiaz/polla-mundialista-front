import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyScoresComponent } from './components/daily-scores/daily-scores.component';

const routes: Routes = [
  {
    path: '',
    component: DailyScoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyScoresRoutingModule { }
