import { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import { api } from "../services/api";
import { Link } from "react-router-dom";

export default function Equipos() {
  const [q, setQ] = useState("");
  const [data, setData] = useState<any>(null);
  const [demo, setDemo] = useState(false);

  useEffect(() => {
    (async () => {
      const t = await api.teams(2024, 140);
      setData(t);
      setDemo(Boolean(t?.demo) || !t?.ok);
    })();
  }, []);

  const teams = useMemo(() => {
    const arr = data?.data?.response;
    if (Array.isArray(arr)) {
      return arr.map((x: any) => x.team).filter(Boolean);
    }
    return [];
  }, [data]);

  const filtered = teams.filter((t: any) => (t?.name || "").toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="pb-24">
      <Header title="Equipos" />
      <div className="mx-auto max-w-md px-4 pt-4">
        {demo && (
          <div className="mb-3 rounded-2xl border border-yellow-400/30 bg-yellow-500/10 px-4 py-3 text-sm text-yellow-200">
            Mostrando datos de demo o limitados. Configura FOOTBALL_API_KEY.
          </div>
        )}

        <div className="mb-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar equipo…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-white/40"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          {(filtered.length ? filtered : teams).slice(0, 20).map((t: any) => (
            <Link
              to={`/equipo/${t.id}`}
              key={t.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-white/10" />
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold">{t.name}</div>
                  <div className="truncate text-xs text-white/60">{t.country || "España"}</div>
                </div>
              </div>
              <div className="mt-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                Temporada 24/25
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
