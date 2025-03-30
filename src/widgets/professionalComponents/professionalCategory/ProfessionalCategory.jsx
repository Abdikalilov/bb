import React from 'react';
import './professionalCategory.scss';

export const ProfessionalCategory = () => {
  return (
    <div className="professional-category-card">
      <div className="professional-category-content">
        <h3 className="professional-category-title">пособие матерям</h3>
        <p className="professional-category-text">Роман рассказывает о жизни старого чабана Танабая и его верного коня Гульсары. Это история о дружбе, изменениях в обществе и воспоминаниях о прошлом, наполненная глубокими размышлениями о человеческой судьбе.</p>
      </div>
      <button className="professional-category-button">
        <span className="button_text">ЧИТАТЬ</span>
      </button>
    </div>
  );
};