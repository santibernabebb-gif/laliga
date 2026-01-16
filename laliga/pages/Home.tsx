
import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Fixture } from '../types';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [fixtures, setFixtures] = useState<Fixture[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDemo, setIsDemo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      const res = await api.getRecentFixtures();
      setFixtures(res.data.slice(0, 5));
      setIsDemo(!!res.demo);
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero */}
      <section className="relative h-64 rounded-3xl overflow-hidden bg-gradient-to-r from-red-700 to-zinc-900 flex items-center px-8 shadow-2xl">
        <div className="z-10 max-w-md">
          <span className="bg-white text-red-600 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block tracking-widest uppercase">
            Temporada 24/25
          </span>
          <h1 className="text-4xl font-black italic mb-2 leading-tight uppercase tracking-tighter">
            EL PODER DE <br /> NUESTRA LIGA
          </h1>
          <p className="text-zinc-200 text-sm font-medium mb-6">
            Sigue toda la emoción de LaLiga EA Sports en tiempo real.
          </p>
          <button 
            onClick={() => navigate('/liga')}
            className="bg-white text-zinc-950 px-6 py-2.5 rounded-xl font-bold hover:bg-zinc-200 transition-colors uppercase text-xs tracking-widest"
          >
            Ver Clasificación
          </button>
        </div>
        <div className="absolute right-[-40px] bottom-[-20px] opacity-20 pointer-events-none">
           <div className="w-80 h-80 bg-red-600 rounded-full blur-[100px]"></div>
        </div>
      </section>

      {isDemo && (
        <div className="bg-red-950/30 border border-red-900/50 text-red-400 p-3 rounded-xl text-center text-xs font-bold uppercase tracking-widest">
          ⚠️ Mostrando datos de ejemplo
        </div>
      )}

      {/* Partidos Recientes */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-xl font-bold uppercase tracking-tight italic">Últimos Resultados</h2>
          <span className="text-zinc-500 text-xs font-bold uppercase cursor-pointer hover:text-red-500">Ver todo</span>
        </div>
        
        <div className="space-y-4">
          {loading ? (
             [1,2,3].map(i => <div key={i} className="h-24 bg-zinc-900 animate-pulse rounded-2xl border border-zinc-800" />)
          ) : (
            fixtures.map(f => (
              <Card key={f.id} className="flex items-center justify-between">
                <div className="flex flex-col items-center gap-2 flex-1">
                  <img src={f.teams.home.logo} alt={f.teams.home.name} className="w-10 h-10 object-contain" />
                  <span className="text-[10px] font-bold text-center uppercase tracking-tighter leading-none">{f.teams.home.name}</span>
                </div>
                
                <div className="flex flex-col items-center px-4">
                  <div className="text-2xl font-black italic">
                    {f.goals.home} - {f.goals.away}
                  </div>
                  <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1">Finalizado</div>
                </div>

                <div className="flex flex-col items-center gap-2 flex-1">
                  <img src={f.teams.away.logo} alt={f.teams.away.name} className="w-10 h-10 object-contain" />
                  <span className="text-[10px] font-bold text-center uppercase tracking-tighter leading-none">{f.teams.away.name}</span>
                </div>
              </Card>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
