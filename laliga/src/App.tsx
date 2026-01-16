import { Routes, Route } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import Home from "./pages/Home";
import Liga from "./pages/Liga";
import Equipos from "./pages/Equipos";
import EquipoDetalle from "./pages/EquipoDetalle";
import Noticias from "./pages/Noticias";
import Perfil from "./pages/Perfil";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liga" element={<Liga />} />
        <Route path="/equipos" element={<Equipos />} />
        <Route path="/equipo/:id" element={<EquipoDetalle />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
      <BottomNav />
    </div>
  );
}
