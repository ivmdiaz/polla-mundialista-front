import { environment } from 'src/environments/environment';
import { RankingPlayer } from './../pages/ranking/interfaces/ranking-player.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import RankingJsonMock from 'src/app/json/ranking.json'
import MatchesJsonMock from 'src/app/json/matches.json'
import { Match } from '../pages/matches/interfaces/match.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestBackendService {

  constructor(private backendHttp: HttpClient) {
  }

  protected getServiceRanking(): Observable<{ data: RankingPlayer[] }> {
    if (environment.production) {
      return this.backendHttp.get(`/exec?service=ranking`) as any;
    }
    else {
      return of(RankingJsonMock) as any;
    }

  }

  protected getServiceMatches(): Observable<{ data: Match[] }> {
    if (environment.production) {
      return this.backendHttp.get(`/exec?service=matches`) as any;
    }
    else {
      return of(MatchesJsonMock) as any;
    }
  }
}
