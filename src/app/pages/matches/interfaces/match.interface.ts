export interface Match {
  id: number;
  group: string;
  date: Date;
  team_1: Team;
  team_2: Team;
  result_team_1: string;
  result_team_2: string;
}


export interface Team {
  id: number;
  name: string;
}
