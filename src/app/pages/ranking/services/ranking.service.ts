import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { RequestBackendService } from 'src/app/services/request-backend.service';
import { RankingPlayer } from '../interfaces/ranking-player.interface';

@Injectable({
  providedIn: 'root'
})
export class RankingService extends RequestBackendService {

  constructor(public http: HttpClient) {
    super(http);
  }

  public getRanking(): Observable<RankingPlayer[]> {
    return super.getServiceRanking().pipe(
      map(results => results.data.sort((a, b) => b.points - a.points))
    );
  }

}
