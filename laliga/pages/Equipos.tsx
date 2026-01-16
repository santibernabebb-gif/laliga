
import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Team } from '../types';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

const Equipos: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      const res = await api.getTeams();
      setTeams(res.data);
      setLoading(false);
    };
    load();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-black italic uppercase tracking-tighter">Equipos de LALIGA</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {loading ? (
          Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="h-32 bg-zinc-900 animate-pulse rounded-2xl border border-zinc-800" />
          ))
        ) : (
          teams.map((t) => (
            <Card 
              key={t.id} 
              onClick={() => navigate(`/equipo/${t.id}`)}
              className="flex flex-col items-center justify-center py-6 gap-3 group"
            >
              <img 
                src={t.logo} 
                alt={t.name} 
                className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300" 
              />
              <span className="font-bold text-center text-xs uppercase tracking-tight">{t.name}</span>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Equipos;
