
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-zinc-900 border border-zinc-800 rounded-2xl p-4 ${onClick ? 'cursor-pointer hover:border-red-600/50 transition-all' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
