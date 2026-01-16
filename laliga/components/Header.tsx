
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-4xl">
        <div 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center font-black text-xl italic skew-x-[-12deg] group-hover:bg-red-500 transition-colors">
            LL
          </div>
          <span className="font-bold text-lg tracking-tight">
            LALIGA <span className="text-red-500">EA SPORTS</span>
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
