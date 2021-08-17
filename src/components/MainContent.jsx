import React from 'react';
import { Cart, FilterChip } from './';

import jobsData from '../data.json';

const MainContent = () => {
  return (
    <main className="main">
      <FilterChip />

      <div className="cart-container">
        {jobsData.map((job, index) => (
          <Cart key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
};

export default MainContent;
