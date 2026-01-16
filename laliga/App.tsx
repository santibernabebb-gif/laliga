
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Liga from './pages/Liga';
import Equipos from './pages/Equipos';
import EquipoDetalle from './pages/EquipoDetalle';
import Noticias from './pages/Noticias';
import Perfil from './pages/Perfil';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen pb-20">
        <Header />
        <main className="flex-grow container mx-auto px-4 max-w-4xl pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/liga" element={<Liga />} />
            <Route path="/equipos" element={<Equipos />} />
            <Route path="/equipo/:id" element={<EquipoDetalle />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </HashRouter>
  );
};

export default App;
