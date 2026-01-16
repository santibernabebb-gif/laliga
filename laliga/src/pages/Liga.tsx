import { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { api } from "../services/api";

type Tab = "clasificacion" | "resultados";

export default function Liga() {
  const [tab, setTab] = useState<Tab>("clasificacion");
  const [standings, setStandings] = useState<any>(null);
  const [fixtures, setFixtures] = useState<any>(null);
  const [demo, setDemo] = useState(false);

  useEffect(() => {
    (async () => {
      const s = await api.standings(2024, 140);
      setStandings(s);
      setDemo(Boolean(s?.demo) || !s?.ok);
      const f = await api.fixturesRecent(10, 2024, 140);
      setFixtures(f);
      setDemo((prev) => prev || Boolean(f?.demo) || !f?.ok);
    })();
  }, []);

  const table = useMemo(() => {
    // API-Football structure: response[0].league.standings[0]
    const rows = standings?.data?.response?.[0]?.league?.standings?.[0];
    if (Array.isArray(rows)) return rows;
    return null;
  }, [standings]);

  return (
    <div className="pb-24">
      <Header title="Liga" />
      <div className="mx-auto max-w-md px-4 pt-4">
        {demo && (
          <div className="mb-3 rounded-2xl border border-yellow-400/30 bg-yellow-500/10 px-4 py-3 text-sm text-yellow-200">
            Mostrando datos de demo o limitados. Revisa variables de entorno (FOOTBALL_API_KEY).
          </div>
        )}

        <div className="mb-4 flex rounded-full bg-white/10 p-1">
          <button
            onClick={() => setTab("clasificacion")}
            className={"flex-1 rounded-full px-3 py-2 text-sm " + (tab === "clasificacion" ? "bg-red-500 font-semibold" : "text-white/70")}
          >
            Clasificación
          </button>
          <button
            onClick={() => setTab("resultados")}
            className={"flex-1 rounded-full px-3 py-2 text-sm " + (tab === "resultados" ? "bg-red-500 font-semibold" : "text-white/70")}
          >
            Resultados
          </button>
        </div>

        {tab === "clasificacion" ? (
          <Card>
            <div className="text-sm font-semibold">Clasificación (LaLiga)</div>
            <div className="mt-3 space-y-2">
              {table ? (
                table.slice(0, 10).map((r: any) => (
                  <div key={r.rank} className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-6 text-xs text-white/70">{r.rank}</div>
                      <div className="h-7 w-7 rounded-full bg-white/10" />
                      <div className="text-sm">{r.team?.name}</div>
                    </div>
                    <div className="text-sm font-semibold">{r.points}</div>
                  </div>
                ))
              ) : (
                <div className="text-sm text-white/70">Cargando / sin datos…</div>
              )}
            </div>
            <div className="mt-4 text-xs text-white/60">
              Nota: La tabla completa depende del plan/límites de la API.
            </div>
          </Card>
        ) : (
          <div className="space-y-3">
            <div className="text-sm font-semibold">Resultados Recientes</div>
            {fixtures?.ok && Array.isArray(fixtures?.data?.response) ? (
              fixtures.data.response.slice(0, 8).map((m: any) => (
                <Card key={m.fixture?.id}>
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-white/80">{m.teams?.home?.name}</div>
                    <div className="font-semibold">
                      {m.goals?.home ?? "-"} : {m.goals?.away ?? "-"}
                    </div>
                    <div className="text-white/80">{m.teams?.away?.name}</div>
                  </div>
                </Card>
              ))
            ) : (
              <Card>
                <div className="text-sm text-white/70">Cargando / sin datos…</div>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
