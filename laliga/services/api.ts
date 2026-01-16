
import { ApiResponse, Team, Standing, Fixture, Player } from '../types';

const fetchApi = async <T,>(endpoint: string): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(`/api${endpoint}`);
    if (!response.ok) throw new Error('API Error');
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return { data: [] as any, demo: true, error: 'Mostrando datos de ejemplo' };
  }
};

export const api = {
  getStandings: () => fetchApi<Standing[]>('/standings'),
  getTeams: () => fetchApi<Team[]>('/teams'),
  getTeam: (id: string) => fetchApi<Team>(`/team/${id}`),
  getTeamPlayers: (id: string) => fetchApi<Player[]>(`/team/${id}/players`),
  getRecentFixtures: () => fetchApi<Fixture[]>('/fixtures-recent'),
};
