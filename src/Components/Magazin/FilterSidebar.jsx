
// src/components/FilterSidebar.jsx
import React, { useState } from 'react';

const categories = [
  "Электроника и техника",
  "Одежда",
  "Авто и мототовары",
  "Книги",
  // Добавьте остальные категории
];

export default function FilterSidebar({ onCategoryChange }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
    onCategoryChange(selectedCategories);
  };

  return (
    <div className="w-64 bg-white shadow p-4">
      <h3 className="text-lg font-bold mb-4">Выбор по категориям</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
              className="mr-2"
            />
            <label>{category}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}