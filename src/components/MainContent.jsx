import React from 'react';
import { Cart, FilterChip } from './';

import jobsData from '../data.json';

const MainContent = React.memo(() => {
  const [chipNames, setChipNames] = React.useState([]);
  const [jobs, setJobs] = React.useState(jobsData);

  console.log(jobs);

  /*
    3. Отображение карточек сделать из стейта, а не из импорта
    4. Настроить фильтрацию
   */

  const addChipsData = (name) => {
    if (chipNames.includes(name)) return false;
    setChipNames([...chipNames, name]);
  };

  const removeChipsData = (name) => {
    setChipNames(chipNames.filter((e) => e !== name));
  };
  const clearChipsData = () => {
    setChipNames([]);
  };

  const handleAction = (action) => {
    switch (action.type) {
      case 'ADD':
        return addChipsData(action.name);
      case 'REMOVE':
        return removeChipsData(action.name);
      case 'CLEAR':
        return clearChipsData();
      default:
        break;
    }
  };

  return (
    <main className="main">
      <FilterChip chipNames={chipNames} handleAction={handleAction} withButton />

      <div className="cart-container">
        {jobs.map((job) => (
          <Cart key={job.id} job={job} handleAction={handleAction} />
        ))}
      </div>
    </main>
  );
});

export default MainContent;
