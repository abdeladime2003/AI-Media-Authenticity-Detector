import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const scrollToTest = () => {
    navigate('/test');
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-gray-900 via-gray-800 to-purple-900 text-white overflow-hidden">

      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Contenu principal */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Pouvez-vous distinguer ce qui est réel de ce qui est généré ?
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-blue-100 animate-fade-in-delay">
          Rejoignez la mission pour décoder l'artificiel.
        </p>
        
        <button 
          onClick={scrollToTest} 
          className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg transform transition-all hover:scale-105 hover:shadow-neon animate-fade-in-delay-2"
        >
          Essayez maintenant
        </button>
      </div>
      
      {/* Éléments décoratifs */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-purple-800 to-transparent opacity-30"></div>
    </div>
  );
};

export default HeroSection;
