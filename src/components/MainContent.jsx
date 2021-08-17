import React from 'react';
import { Cart, FilterChip } from './';

import jobsData from '../data.json';

const MainContent = () => {
  const [chipsData, setChipsData] = React.useState([]);

  const handleGetName = (name) => {
    console.log(name);
  };

  return (
    <main className="main">
      <FilterChip data={chipsData} />

      <div className="cart-container">
        {jobsData.map((job) => (
          <Cart key={job.id} job={job} handleGetName={handleGetName} />
        ))}
      </div>
    </main>
  );
};

export default MainContent;
