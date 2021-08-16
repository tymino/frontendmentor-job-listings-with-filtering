import React from 'react';
import { Cart, ChipContainer } from './';

import jobsData from '../data.json';

const MainContent = () => {
  return (
    <main className="main">
      <ChipContainer />

      <div className="cart-container">
        {jobsData.map((job, index) => (
          <Cart key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
};

export default MainContent;
