import React from 'react';
import { Cart, FilterChip } from './';

import jobsData from '../data.json';

const MainContent = React.memo(() => {
  const [chipsData, setChipsData] = React.useState([]);
  // const [filteredData, setFilteredData] = React.useState(jobsData);

  /*
    1. Настроить отображение Chip'ов из стейта.
    2. Стили для chip доделать.
    3. Отображение карточек сделать из стейта, а не из импорта
    4. Настроить фильтрацию
   */

  const addChipsData = (name) => {
    if (chipsData.includes(name)) return false;
    setChipsData([...chipsData, name]);
  };

  const removeChipsData = (name) => {
    setChipsData(chipsData.filter((e) => e !== name));
  };

  const handleGetName = (action) => {
    switch (action.type) {
      case 'ADD':
        return addChipsData(action.name);
      case 'REMOVE':
        return removeChipsData(action.name);
      default:
        break;
    }
  };

  return (
    <main className="main">
      <FilterChip />

      <div className="cart-container">
        {jobsData.map((job) => (
          <Cart key={job.id} job={job} handleGetName={handleGetName} />
        ))}
      </div>
    </main>
  );
});

export default MainContent;
