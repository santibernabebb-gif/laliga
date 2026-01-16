
export const FETCH_CONFIG = {
  headers: (apiKey: string) => ({
    "x-apisports-key": apiKey,
    "Content-Type": "application/json"
  })
};

export const createResponse = (data: any, demo = false) => {
  return new Response(JSON.stringify({ data, demo }), {
    headers: { "Content-Type": "application/json" }
  });
};

export const MOCK_TEAMS = [
  { id: 541, name: "Real Madrid", logo: "https://media.api-sports.io/football/teams/541.png", founded: 1902, venue: { name: "Santiago Bernabéu", city: "Madrid" } },
  { id: 529, name: "Barcelona", logo: "https://media.api-sports.io/football/teams/529.png", founded: 1899, venue: { name: "Camp Nou", city: "Barcelona" } },
  { id: 530, name: "Atletico Madrid", logo: "https://media.api-sports.io/football/teams/530.png", founded: 1903, venue: { name: "Metropolitano", city: "Madrid" } }
];

export const MOCK_STANDINGS = MOCK_TEAMS.map((t, i) => ({
  rank: i + 1,
  team: t,
  points: (3 - i) * 3,
  goalsDiff: (3 - i) * 2,
  all: { played: 1, win: 1, draw: 0, lose: 0, goals: { for: 2, against: 0 } }
}));

export const MOCK_FIXTURES = [
  {
    id: 1,
    date: new Date().toISOString(),
    status: { short: "FT", elapsed: 90 },
    teams: { home: MOCK_TEAMS[0], away: MOCK_TEAMS[1] },
    goals: { home: 3, away: 1 }
  }
];

export const MOCK_PLAYERS = [
  { id: 1, name: "Vinícius Júnior", position: "Forward", age: 24, number: 7, photo: "https://media.api-sports.io/football/players/644.png" },
  { id: 2, name: "Pedri", position: "Midfielder", age: 21, number: 8, photo: "https://media.api-sports.io/football/players/141.png" }
];
