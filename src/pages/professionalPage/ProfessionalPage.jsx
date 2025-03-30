import React, { useState } from 'react';
import { ProfessionalCategory, ProfessionalBaner, ProfessionalSearch } from '../../widgets';
import './professionalPage.scss';
export const ProfessionalPage = () => {
  const [activeTab, setActiveTab] = useState('metod');
  const categories = [
    {
      title: 'ПОСОБИЕ МАТЕРЯМ',
      description:
        'Роман рассказывает о жизни старого чабана Танабая и его верного коня Гульсары. Это история о дружбе, изменениях в обществе и воспоминаниях о прошлом, наполненная глубокими размышлениями о человеческой судьбе.',
    },
    {
      title: 'ПОСОБИЕ МАТЕРЯМ',
      description:
        'Роман рассказывает о жизни старого чабана Танабая и его верного коня Гульсары. Это история о дружбе, изменениях в обществе и воспоминаниях о прошлом, наполненная глубокими размышлениями о человеческой судьбе.',
    },
    {
      title: 'ПОСОБИЕ МАТЕРЯМ',
      description:
        'Роман рассказывает о жизни старого чабана Танабая и его верного коня Гульсары. Это история о дружбе, изменениях в обществе и воспоминаниях о прошлом, наполненная глубокими размышлениями о человеческой судьбе.',
    },
    {
      title: 'ПОСОБИЕ МАТЕРЯМ',
      description:
        'Роман рассказывает о жизни старого чабана Танабая и его верного коня Гульсары. Это история о дружбе, изменениях в обществе и воспоминаниях о прошлом, наполненная глубокими размышлениями о человеческой судьбе.',
    },
  ];
  return (
    <div className="professional-page">
      <ProfessionalBaner activeTab={activeTab} setActiveTab={setActiveTab} />
      <ProfessionalSearch />
      <div className="category-list">
        {categories.map((category, index) => (
          <ProfessionalCategory key={index} title={category.title} description={category.description} />
        ))}
      </div>
    </div>
  );
};