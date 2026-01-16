
import React from 'react';
import Card from '../components/Card';

const Noticias: React.FC = () => {
  const news = [
    { id: 1, title: "LALIGA EA SPORTS: El derbi madrileño se juega este domingo", tag: "Previo", time: "hace 2h", img: "https://picsum.photos/seed/liga1/800/400" },
    { id: 2, title: "Nuevas promesas que están brillando en el campeonato", tag: "Reportaje", time: "hace 5h", img: "https://picsum.photos/seed/liga2/800/400" },
    { id: 3, title: "Balance de la jornada: Sorpresas en la parte baja", tag: "Crónica", time: "ayer", img: "https://picsum.photos/seed/liga3/800/400" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-black italic uppercase tracking-tighter">Últimas Noticias</h1>
      
      <div className="space-y-6">
        {news.map(item => (
          <div key={item.id} className="group cursor-pointer">
            <div className="relative aspect-video rounded-3xl overflow-hidden mb-4 border border-zinc-800">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-widest">
                {item.tag}
              </div>
            </div>
            <h3 className="text-xl font-bold leading-tight mb-2 group-hover:text-red-500 transition-colors">{item.title}</h3>
            <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Noticias;
