import React from 'react';
import { Cart, FilterChip } from './';

import jobsData from '../data.json';

const MainContent = React.memo(() => {
  const [chipNames, setChipNames] = React.useState([]);
  const [jobs, setJobs] = React.useState(jobsData);

  const filterJob = (chips) => {
    const actualChips = chips;
    let filteredJobs = jobsData;

    actualChips.forEach((chip) => {
      filteredJobs = filteredJobs.filter((job) => {
        return [job.role, job.level, ...job.languages, ...job.tools].includes(chip);
      });
    });

    setChipNames(actualChips);
    setJobs(filteredJobs);
  };

  const addChipsData = (name) => {
    if (!chipNames.includes(name)) return filterJob([...chipNames, name]);
  };

  const removeChipsData = (name) => {
    filterJob(chipNames.filter((e) => e !== name));
  };
  const clearChipsData = () => {
    filterJob([]);
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
