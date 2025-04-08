import React from 'react';
import './professionalCategory.scss';

export const ProfessionalCategory = ({ title, description }) => {
  const handleReadClick = () => {
    console.log('Reading:', title);
  };

  return (
    <div className="container">
      <div className="professional-category-card ">
        <div className="professional-category-content">
          <h3 className="professional-category-title">{title}</h3>
          <p className="professional-category-text">{description}</p>
        </div>
        <div className="professional-category-button">
          <button className="professional-button" onClick={handleReadClick}>
            ЧИТАТЬ
          </button>
        </div>
      </div>
    </div>

  );
};