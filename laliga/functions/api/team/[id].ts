
import { FETCH_CONFIG, createResponse, MOCK_TEAMS } from "../_utils";

export async function onRequest(context: any) {
  const { env, params } = context;
  const id = params.id;
  const baseUrl = env.FOOTBALL_API_BASE_URL || "https://v3.football.api-sports.io";
  const apiKey = env.FOOTBALL_API_KEY;

  if (!apiKey) {
    const mock = MOCK_TEAMS.find(t => t.id.toString() === id) || MOCK_TEAMS[0];
    return createResponse(mock, true);
  }

  try {
    const res = await fetch(`${baseUrl}/teams?id=${id}`, {
      headers: FETCH_CONFIG.headers(apiKey)
    });
    const json: any = await res.json();
    if (json.response && json.response[0]) {
       const teamInfo = { ...json.response[0].team, venue: json.response[0].venue };
       return createResponse(teamInfo);
    }
    throw new Error('Team not found');
  } catch {
    const mock = MOCK_TEAMS.find(t => t.id.toString() === id) || MOCK_TEAMS[0];
    return createResponse(mock, true);
  }
}
