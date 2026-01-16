
export interface Team {
  id: number;
  name: string;
  logo: string;
  founded?: number;
  venue?: {
    name: string;
    capacity: number;
    city: string;
  };
}

export interface Player {
  id: number;
  name: string;
  age: number;
  number: number;
  position: string;
  photo: string;
}

export interface Standing {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  all: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
      for: number;
      against: number;
    }
  }
}

export interface Fixture {
  id: number;
  date: string;
  status: {
    short: string;
    elapsed: number;
  };
  teams: {
    home: Team;
    away: Team;
  };
  goals: {
    home: number;
    away: number;
  };
}

export interface ApiResponse<T> {
  data: T;
  demo?: boolean;
  error?: string;
}
