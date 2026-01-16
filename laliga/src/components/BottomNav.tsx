import { NavLink } from "react-router-dom";

const Item = ({ to, label }: { to: string; label: string }) => (
  <NavLink to={to} className="flex flex-col items-center justify-center gap-1 text-xs">
    {({ isActive }) => (
      <>
        <span className={"h-2 w-2 rounded-full " + (isActive ? "bg-red-400" : "bg-white/20")} />
        <span className={isActive ? "text-red-400" : "text-white/70"}>{label}</span>
      </>
    )}
  </NavLink>
);

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto grid max-w-md grid-cols-5 px-4 py-3">
        <Item to="/" label="Inicio" />
        <Item to="/liga" label="Liga" />
        <Item to="/equipos" label="Equipos" />
        <Item to="/noticias" label="Noticias" />
        <Item to="/perfil" label="Perfil" />
      </div>
    </div>
  );
}
