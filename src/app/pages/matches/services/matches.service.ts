import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RequestBackendService } from 'src/app/services/request-backend.service';
import { RankingPlayer } from '../../ranking/interfaces/ranking-player.interface';
import { Match } from '../interfaces/match.interface';

@Injectable({
  providedIn: 'root'
})
export class MatchesService extends RequestBackendService {

  constructor(public http: HttpClient) {
    super(http);
  }

  public getMatches(): Observable<Match[]> {
    return super.getServiceMatches().pipe(
      map(results => results.data.sort((a, b) => a.id - b.id))
    );
  }

}
