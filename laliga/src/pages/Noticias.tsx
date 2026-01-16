import Header from "../components/Header";
import Card from "../components/Card";

export default function Noticias() {
  return (
    <div className="pb-24">
      <Header title="Noticias" />
      <div className="mx-auto max-w-md px-4 pt-4 space-y-3">
        <Card>
          <div className="text-sm font-semibold">Noticias (placeholder)</div>
          <div className="mt-1 text-sm text-white/70">
            Aquí puedes mostrar crónicas/fichajes desde RSS o una API dedicada.
          </div>
        </Card>
      </div>
    </div>
  );
}
