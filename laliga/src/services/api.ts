async function getJSON<T>(path: string): Promise<T> {
  const res = await fetch(path);
  const data = await res.json();
  return data as T;
}

export const api = {
  health: () => getJSON<{ ok: boolean }>("/api/health"),
  standings: (season = 2024, league = 140) => getJSON<any>(`/api/standings?season=${season}&league=${league}`),
  teams: (season = 2024, league = 140) => getJSON<any>(`/api/teams?season=${season}&league=${league}`),
  fixturesRecent: (last = 10, season = 2024, league = 140) =>
    getJSON<any>(`/api/fixtures-recent?last=${last}&season=${season}&league=${league}`),
  team: (id: number) => getJSON<any>(`/api/team/${id}`),
  players: (id: number, season = 2024) => getJSON<any>(`/api/team/${id}/players?season=${season}`),
};
