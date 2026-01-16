
import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Standing } from '../types';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

const Liga: React.FC = () => {
  const [standings, setStandings] = useState<Standing[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDemo, setIsDemo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      const res = await api.getStandings();
      setStandings(res.data);
      setIsDemo(!!res.demo);
      setLoading(false);
    };
    load();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black italic uppercase tracking-tighter">Clasificación</h1>
        {isDemo && <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest">Demo Mode</span>}
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-800/50 border-b border-zinc-800 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              <tr>
                <th className="px-4 py-3 text-center">Pos</th>
                <th className="px-4 py-3">Equipo</th>
                <th className="px-4 py-3 text-center">PJ</th>
                <th className="px-4 py-3 text-center">DG</th>
                <th className="px-4 py-3 text-center">PTS</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array.from({ length: 10 }).map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td className="px-4 py-4"><div className="h-4 bg-zinc-800 rounded w-4 mx-auto" /></td>
                    <td className="px-4 py-4 flex items-center gap-3">
                      <div className="w-6 h-6 bg-zinc-800 rounded-full" />
                      <div className="h-4 bg-zinc-800 rounded w-24" />
                    </td>
                    <td className="px-4 py-4"><div className="h-4 bg-zinc-800 rounded w-4 mx-auto" /></td>
                    <td className="px-4 py-4"><div className="h-4 bg-zinc-800 rounded w-4 mx-auto" /></td>
                    <td className="px-4 py-4"><div className="h-4 bg-zinc-800 rounded w-4 mx-auto" /></td>
                  </tr>
                ))
              ) : (
                standings.map((s) => (
                  <tr 
                    key={s.team.id} 
                    className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors cursor-pointer"
                    onClick={() => navigate(`/equipo/${s.team.id}`)}
                  >
                    <td className="px-4 py-4 text-center font-bold">
                      <span className={`
                        inline-flex items-center justify-center w-6 h-6 rounded-md
                        ${s.rank <= 4 ? 'bg-blue-600/20 text-blue-400' : ''}
                        ${s.rank === 5 || s.rank === 6 ? 'bg-orange-600/20 text-orange-400' : ''}
                        ${s.rank >= 18 ? 'bg-red-600/20 text-red-400' : ''}
                      `}>
                        {s.rank}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <img src={s.team.logo} alt={s.team.name} className="w-6 h-6 object-contain" />
                        <span className="font-bold truncate max-w-[120px]">{s.team.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center text-zinc-400">{s.all.played}</td>
                    <td className="px-4 py-4 text-center text-zinc-400">{s.goalsDiff}</td>
                    <td className="px-4 py-4 text-center font-black text-red-500">{s.points}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
      
      <div className="flex flex-wrap gap-4 text-[10px] uppercase font-bold text-zinc-500 tracking-widest pb-4">
        <div className="flex items-center gap-2"><span className="w-3 h-3 bg-blue-600 rounded-sm"></span> Champions League</div>
        <div className="flex items-center gap-2"><span className="w-3 h-3 bg-orange-600 rounded-sm"></span> Europa League</div>
        <div className="flex items-center gap-2"><span className="w-3 h-3 bg-red-600 rounded-sm"></span> Descenso</div>
      </div>
    </div>
  );
};

export default Liga;
