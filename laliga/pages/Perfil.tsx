
import React from 'react';
import Card from '../components/Card';

const Perfil: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-black italic uppercase tracking-tighter">Mi Perfil</h1>
      
      <section className="flex items-center gap-6 p-6 bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-3xl border border-zinc-700/50">
        <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center text-3xl font-black italic shadow-lg">
          LL
        </div>
        <div>
          <h2 className="text-2xl font-black italic uppercase tracking-tighter">Aficionado LALIGA</h2>
          <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Nivel Pro • 1200 Puntos</p>
        </div>
      </section>

      <div className="grid gap-4">
        <Card className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-zinc-800 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg></div>
            <span className="font-bold text-sm uppercase">Equipos Favoritos</span>
          </div>
          <span className="text-xs text-red-500 font-bold uppercase">2 Seleccionados</span>
        </Card>
        
        <Card className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-zinc-800 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg></div>
            <span className="font-bold text-sm uppercase">Notificaciones</span>
          </div>
          <div className="w-10 h-5 bg-zinc-700 rounded-full relative"><div className="absolute right-1 top-1 w-3 h-3 bg-red-500 rounded-full"></div></div>
        </Card>
      </div>

      <button className="w-full bg-zinc-900 border border-zinc-800 p-4 rounded-2xl text-zinc-400 font-bold uppercase text-xs tracking-widest hover:text-white transition-colors">
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Perfil;
