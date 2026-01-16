
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { Team, Player } from '../types';
import Card from '../components/Card';

const EquipoDetalle: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [team, setTeam] = useState<Team | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      if (!id) return;
      setLoading(true);
      const [teamRes, playersRes] = await Promise.all([
        api.getTeam(id),
        api.getTeamPlayers(id)
      ]);
      setTeam(teamRes.data);
      setPlayers(playersRes.data);
      setLoading(false);
    };
    loadData();
  }, [id]);

  if (loading) return <div className="text-center py-20 animate-pulse">Cargando equipo...</div>;
  if (!team) return <div className="text-center py-20">Equipo no encontrado.</div>;

  return (
    <div className="space-y-8 pb-10">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors uppercase text-[10px] font-black italic tracking-widest"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Volver
      </button>

      <section className="flex flex-col items-center gap-4 text-center">
        <img src={team.logo} alt={team.name} className="w-32 h-32 object-contain" />
        <div>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter leading-none mb-1">{team.name}</h1>
          <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Fundado en {team.founded || 'N/A'}</p>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-4">
        <Card className="flex flex-col gap-1">
          <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Estadio</span>
          <span className="font-bold text-sm truncate">{team.venue?.name || 'N/A'}</span>
        </Card>
        <Card className="flex flex-col gap-1">
          <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Ciudad</span>
          <span className="font-bold text-sm">{team.venue?.city || 'N/A'}</span>
        </Card>
      </div>

      <section>
        <h2 className="text-xl font-black italic uppercase tracking-tighter mb-4">Plantilla Actual</h2>
        <div className="grid gap-3">
          {players.length === 0 ? (
            <p className="text-zinc-500 text-sm">No hay datos de jugadores disponibles.</p>
          ) : (
            players.map(p => (
              <div key={p.id} className="flex items-center gap-4 p-3 bg-zinc-900 border border-zinc-800 rounded-xl">
                <div className="w-12 h-12 bg-zinc-800 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={p.photo} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <div className="font-bold text-sm uppercase tracking-tight">{p.name}</div>
                  <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">{p.position}</div>
                </div>
                <div className="text-xl font-black italic text-red-600 opacity-50">
                  #{p.number || '--'}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default EquipoDetalle;
