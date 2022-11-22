import { Player } from 'src/app/shared/interfaces/player.interface';
import { Team } from '../../matches/interfaces/match.interface';

export interface MatchDailyScores {
  id: number;
  group: string;
  date: Date;
  team_1: Team;
  team_2: Team;
  result_team_1: number;
  result_team_2: number;
  scores: Score[];
}

export interface Score {

  score_team_1: number;
  score_team_2: number;
  player: Player
}
