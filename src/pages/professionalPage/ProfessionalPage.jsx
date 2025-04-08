import React, { useState, useMemo } from 'react';
import { ProfessionalCategory } from '../../widgets/professionalComponents/professionalCategory/ProfessionalCategory';
import { ProfessionalBaner } from '../../widgets/professionalComponents/professionalBaner/ProfessionalBaner';
import { ProfessionalSearch } from '../../widgets/professionalComponents/professionalSearch/ProfessionalSearch';
import './professionalPage.scss';

export const ProfessionalPage = () => {
  const [activeTab, setActiveTab] = useState('multi');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      id: 1,
      type: 'multi',
      title: 'ПОСОБИЕ МАТЕРЯМ',
      description:
        'Роман рассказывает о жизни старого чабана Танабая и его верного коня Гульсары. Это история о дружбе, изменениях в обществе и воспоминаниях о прошлом, наполненная глубокими размышлениями о человеческой судьбе.',
    },
    {
      id: 2,
      type: 'metod',
      title: 'МЕТОДИЧЕСКОЕ ПОСОБИЕ',
      description:
        'Роман рассказывает о жизни старого чабана Танабая и его верного коня Гульсары. Это история о дружбе, изменениях в обществе и воспоминаниях о прошлом, наполненная глубокими размышлениями о человеческой судьбе.',
    },
    {
      id: 3,
      type: 'other',
      title: 'ПОСОБИЕ МАТЕРЯМ',
      description:
        'Роман рассказывает о жизни старого чабана Танабая и его верного коня Гульсары. Это история о дружбе, изменениях в обществе и воспоминаниях о прошлом, наполненная глубокими размышлениями о человеческой судьбе.',
    },
    {
      id: 4,
      type: 'other',
      title: 'ПОСОБИЕ МАТЕРЯМ',
      description:
        'Роман рассказывает о жизни старого чабана Танабая и его верного коня Гульсары. Это история о дружбе, изменениях в обществе и воспоминаниях о прошлом, наполненная глубокими размышлениями о человеческой судьбе.',
    },
  ];

  const filteredCategories = useMemo(() => {
    const searchLower = searchQuery.toLowerCase().trim();
    
    return categories.filter(category => {
      const matchesSearch = searchLower === '' || 
        category.title.toLowerCase().includes(searchLower) ||
        category.description.toLowerCase().includes(searchLower);
      const matchesTab = activeTab === 'other' || category.type === activeTab;

      return matchesSearch && matchesTab;
    });
  }, [categories, activeTab, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="professional-page">
      <ProfessionalBaner activeTab={activeTab} setActiveTab={setActiveTab} />
      <ProfessionalSearch onSearch={handleSearch} />
      <div className="category-list">
        {filteredCategories.map((category) => (
          <ProfessionalCategory
            key={category.id}
            title={category.title}
            description={category.description}
          />
        ))}
      </div>
    </div>
  );
};