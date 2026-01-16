
import { FETCH_CONFIG, createResponse, MOCK_FIXTURES } from "./_utils";

export async function onRequest(context: any) {
  const { env } = context;
  const baseUrl = env.FOOTBALL_API_BASE_URL || "https://v3.football.api-sports.io";
  const apiKey = env.FOOTBALL_API_KEY;

  if (!apiKey) return createResponse(MOCK_FIXTURES, true);

  try {
    const res = await fetch(`${baseUrl}/fixtures?league=140&season=2024&last=10`, {
      headers: FETCH_CONFIG.headers(apiKey)
    });
    const json: any = await res.json();
    if (json.response) return createResponse(json.response);
    throw new Error('No fixtures');
  } catch {
    return createResponse(MOCK_FIXTURES, true);
  }
}
