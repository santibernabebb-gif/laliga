import { Link } from "react-router-dom";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="mx-auto max-w-md px-4 pb-24 pt-4">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-red-900/40 via-black to-black p-6 shadow-glow">
        <div className="text-2xl font-extrabold leading-tight">
          Bienvenido a la <span className="text-red-400">Pasión</span> de LaLiga
        </div>
        <div className="mt-2 text-sm text-white/70">
          Clasificación, resultados y equipos en una app lista para Cloudflare.
        </div>
        <Link
          to="/equipos"
          className="mt-5 inline-flex items-center justify-center rounded-full bg-red-500 px-5 py-3 text-sm font-semibold"
        >
          Ver Equipos
        </Link>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-base font-semibold">Noticias Destacadas</div>
        <div className="flex gap-2">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs">CRÓNICA</span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs">FICHAJES</span>
        </div>
      </div>

      <div className="mt-3 space-y-3">
        <Card>
          <div className="text-sm font-semibold">Modo demo listo</div>
          <div className="mt-1 text-sm text-white/70">
            Si no configuras la API, verás datos de ejemplo sin romper la app.
          </div>
        </Card>
        <Card>
          <div className="text-sm font-semibold">Proxy /api/…</div>
          <div className="mt-1 text-sm text-white/70">
            El frontend nunca ve tu API key. Cloudflare Functions hace de puente.
          </div>
        </Card>
      </div>

      <div className="mt-6 text-base font-semibold">Equipos Populares</div>
      <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
        {["Real Madrid", "Barcelona", "Atlético", "Sevilla", "Valencia"].map((t) => (
          <div key={t} className="flex min-w-[120px] flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-3">
            <div className="h-14 w-14 rounded-full bg-white/10" />
            <div className="text-xs text-white/80">{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
