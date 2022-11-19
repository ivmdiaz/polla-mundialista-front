import { RankingService } from './../../services/ranking.service';
import { Component, OnInit } from '@angular/core';
import { RankingPlayer } from '../../interfaces/ranking-player.interface';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  datasource: RankingPlayer[] = [
    {
      "points": 0,
      "player": {
        "id": 1,
        "name": "Juan Carlos",
        "image": "1JC"
      }
    },
    {
      "points": 0,
      "player": {
        "id": 2,
        "name": "Nelson Alfonso",
        "image": "2NA"
      }
    },
    {
      "points": 5,
      "player": {
        "id": 3,
        "name": "Luz Marina",
        "image": "3LM"
      }
    },
    {
      "points": 0,
      "player": {
        "id": 4,
        "name": "Isabel Cristina",
        "image": "4IC"
      }
    },
    {
      "points": 0,
      "player": {
        "id": 5,
        "name": "Sandra Milena",
        "image": "5SM"
      }
    },
    {
      "points": 3,
      "player": {
        "id": 6,
        "name": "Luis Fernando",
        "image": "6LF"
      }
    },
    {
      "points": 0,
      "player": {
        "id": 7,
        "name": "Diego Alejandro",
        "image": "7DA"
      }
    },
    {
      "points": 0,
      "player": {
        "id": 8,
        "name": "Natalia",
        "image": "8N"
      }
    },
    {
      "points": 0,
      "player": {
        "id": 9,
        "name": "Ivan Mauricio",
        "image": "9IM"
      }
    },
    {
      "points": 0,
      "player": {
        "id": 10,
        "name": "Geraldine",
        "image": "10G"
      }
    },
    {
      "points": 0,
      "player": {
        "id": 11,
        "name": "Karol Nicol",
        "image": "11KN"
      }
    },
    {
      "points": 0,
      "player": {
        "id": 12,
        "name": "Juan David",
        "image": "12JD"
      }
    },
    {
      "points": 5,
      "player": {
        "id": 13,
        "name": "Andrés Felipe",
        "image": "13AF"
      }
    },
    {
      "points": 0,
      "player": {
        "id": 14,
        "name": "Dilan Santiago",
        "image": "14DS"
      }
    },
    {
      "points": 3,
      "player": {
        "id": 15,
        "name": "Mariana",
        "image": "15M"
      }
    }
  ]

  constructor(service: RankingService) {
    service.getRanking().subscribe(data => this.datasource = data);
  }

  ngOnInit(): void {
    console.log(this.datasource)
  }

}
