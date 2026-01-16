
import { FETCH_CONFIG, createResponse, MOCK_STANDINGS } from "./_utils";

export async function onRequest(context: any) {
  const { env } = context;
  const baseUrl = env.FOOTBALL_API_BASE_URL || "https://v3.football.api-sports.io";
  const apiKey = env.FOOTBALL_API_KEY;

  if (!apiKey) return createResponse(MOCK_STANDINGS, true);

  try {
    const res = await fetch(`${baseUrl}/standings?league=140&season=2024`, {
      headers: FETCH_CONFIG.headers(apiKey)
    });
    const json: any = await res.json();
    if (json.response && json.response[0]?.league?.standings[0]) {
      return createResponse(json.response[0].league.standings[0]);
    }
    throw new Error('Invalid response');
  } catch {
    return createResponse(MOCK_STANDINGS, true);
  }
}
