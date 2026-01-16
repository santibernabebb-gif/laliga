import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card";
import { api } from "../services/api";

type Tab = "plantilla" | "noticias";

export default function EquipoDetalle() {
  const { id } = useParams();
  const teamId = Number(id);
  const [tab, setTab] = useState<Tab>("plantilla");
  const [team, setTeam] = useState<any>(null);
  const [players, setPlayers] = useState<any>(null);

  useEffect(() => {
    (async () => {
      if (!teamId) return;
      const t = await api.team(teamId);
      setTeam(t);
      const p = await api.players(teamId, 2024);
      setPlayers(p);
    })();
  }, [teamId]);

  const teamInfo = useMemo(() => {
    const resp = team?.data?.response?.[0];
    return resp?.team || null;
  }, [team]);

  const list = useMemo(() => {
    const arr = players?.data?.response;
    if (!Array.isArray(arr)) return [];
    return arr.map((x: any) => x?.players || x?.player || x).flat().filter(Boolean);
  }, [players]);

  return (
    <div className="pb-24">
      <Header title="Detalle equipo" />
      <div className="mx-auto max-w-md px-4 pt-4">
        <Link to="/equipos" className="mb-3 inline-flex text-sm text-white/70">&larr; Volver</Link>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-red-900/30 via-black to-black p-5 shadow-glow">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-2xl bg-white/10" />
            <div className="min-w-0">
              <div className="truncate text-lg font-extrabold">{teamInfo?.name || "Equipo"}</div>
              <div className="mt-1 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                OFICIAL
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { k: "Partidos", v: "-" },
              { k: "Goles", v: "-" },
              { k: "Puntos", v: "-" },
            ].map((x) => (
              <div key={x.k} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                <div className="text-xs text-white/60">{x.k}</div>
                <div className="mt-1 text-base font-bold">{x.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex rounded-full bg-white/10 p-1">
          <button
            onClick={() => setTab("plantilla")}
            className={"flex-1 rounded-full px-3 py-2 text-sm " + (tab === "plantilla" ? "bg-red-500 font-semibold" : "text-white/70")}
          >
            Plantilla
          </button>
          <button
            onClick={() => setTab("noticias")}
            className={"flex-1 rounded-full px-3 py-2 text-sm " + (tab === "noticias" ? "bg-red-500 font-semibold" : "text-white/70")}
          >
            Noticias
          </button>
        </div>

        {tab === "plantilla" ? (
          <div className="mt-3 space-y-3">
            <div className="text-sm font-semibold">Jugadores</div>
            {list.length ? (
              list.slice(0, 20).map((p: any, idx: number) => (
                <Card key={p?.id || idx}>
                  <div className="flex items-center justify-between">
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold">{p?.name || "Jugador"}</div>
                      <div className="text-xs text-white/60">{p?.position || p?.age ? `${p?.position ?? ""} ${p?.age ? "· " + p.age + " años" : ""}` : "—"}</div>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-white/10" />
                  </div>
                </Card>
              ))
            ) : (
              <Card>
                <div className="text-sm text-white/70">Cargando / sin datos…</div>
              </Card>
            )}
          </div>
        ) : (
          <div className="mt-3 space-y-3">
            <div className="text-sm font-semibold">Noticias</div>
            <Card>
              <div className="text-sm text-white/70">
                (Opcional) Puedes conectar RSS o una API de noticias más adelante.
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
