import Header from "../components/Header";
import Card from "../components/Card";

export default function Perfil() {
  return (
    <div className="pb-24">
      <Header title="Perfil" />
      <div className="mx-auto max-w-md px-4 pt-4 space-y-3">
        <Card>
          <div className="text-sm font-semibold">Estado</div>
          <div className="mt-1 text-sm text-white/70">
            Esta app está pensada para desplegar en Cloudflare Pages con Functions (/api).
          </div>
        </Card>
      </div>
    </div>
  );
}
