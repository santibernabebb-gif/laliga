
import { FETCH_CONFIG, createResponse, MOCK_TEAMS } from "./_utils";

export async function onRequest(context: any) {
  const { env } = context;
  const baseUrl = env.FOOTBALL_API_BASE_URL || "https://v3.football.api-sports.io";
  const apiKey = env.FOOTBALL_API_KEY;

  if (!apiKey) return createResponse(MOCK_TEAMS, true);

  try {
    const res = await fetch(`${baseUrl}/teams?league=140&season=2024`, {
      headers: FETCH_CONFIG.headers(apiKey)
    });
    const json: any = await res.json();
    if (json.response && json.response.length > 0) {
      const teams = json.response.map((item: any) => ({
        ...item.team,
        venue: item.venue
      }));
      return createResponse(teams);
    }
    throw new Error('No teams');
  } catch {
    return createResponse(MOCK_TEAMS, true);
  }
}
