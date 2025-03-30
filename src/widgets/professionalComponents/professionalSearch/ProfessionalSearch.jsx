import React from 'react';
import { Search } from 'lucide-react';
import './professionalSearch.scss';

export const ProfessionalSearch = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Поиск" className="search__input" />
      <Search className="search__icon" size={24} strokeWidth={2.5} />
    </div>
  );
};