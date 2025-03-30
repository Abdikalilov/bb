import React from 'react';
import './professionalBaner.scss';

export const ProfessionalBaner = ({ activeTab, setActiveTab }) => {
  return (
    <div className="professional-baner">
      <button
        className={`professional-baner__button ${activeTab === 'multi' ? 'active' : ''}`}
        onClick={() => setActiveTab('multi')}
      >
        МУЛЬТИМЕДИЙНЫЕ ПРОДУКТЫ
      </button>
      <button
        className={`professional-baner__button ${activeTab === 'metod' ? 'active' : ''}`}
        onClick={() => setActiveTab('metod')}
      >
        МЕТОДИЧЕСКИЕ ПОСОБИЯ
      </button>
      <button
        className={`professional-baner__button ${activeTab === 'other' ? 'active' : ''}`}
        onClick={() => setActiveTab('other')}
      >
        ДРУГИЕ
      </button>
    </div>
  );
};