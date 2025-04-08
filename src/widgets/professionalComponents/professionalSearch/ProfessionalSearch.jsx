import React from 'react';
import { Search } from 'lucide-react';
import './professionalSearch.scss';

export const ProfessionalSearch = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="container">    <div className="searchh ">
      <input
        type="text"
        placeholder="Поиск"
        className="searchh_input"
        onChange={handleInputChange}
      />
      <Search className="searchh_iconn" size={24} strokeWidth={2.5} />
    </div>
    </div>
  );
};