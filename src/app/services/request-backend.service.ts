import { RankingPlayer } from './../pages/ranking/interfaces/ranking-player.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestBackendService {

  constructor(private backendHttp: HttpClient) {
  }

  protected getServiceRanking(): Observable<{ data: RankingPlayer[] }> {
    return this.backendHttp.get(`/exec?service=ranking`) as any;
  }

  protected getServiceMatches(): Observable<any> {
    return this.backendHttp.get(`/exec?service=matches`);
  }
}
