
import { FETCH_CONFIG, createResponse, MOCK_PLAYERS } from "../../_utils";

export async function onRequest(context: any) {
  const { env, params } = context;
  const id = params.id;
  const baseUrl = env.FOOTBALL_API_BASE_URL || "https://v3.football.api-sports.io";
  const apiKey = env.FOOTBALL_API_KEY;

  if (!apiKey) return createResponse(MOCK_PLAYERS, true);

  try {
    const res = await fetch(`${baseUrl}/players/squads?team=${id}`, {
      headers: FETCH_CONFIG.headers(apiKey)
    });
    const json: any = await res.json();
    if (json.response && json.response[0]?.players) {
       return createResponse(json.response[0].players);
    }
    throw new Error('Players not found');
  } catch {
    return createResponse(MOCK_PLAYERS, true);
  }
}
