import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RequestBackendService } from 'src/app/services/request-backend.service';
import { MatchDailyScores } from '../interfaces/daily-score.interface';

@Injectable({
  providedIn: 'root'
})
export class DailyScoresService extends RequestBackendService {

  constructor(public http: HttpClient) {
    super(http);
  }

  public getDailyScores(): Observable<MatchDailyScores[]> {
    return super.getServiceDailyScores().pipe(
      map(results => results.data.sort((a, b) => a.id - b.id))
    );
  }

}
