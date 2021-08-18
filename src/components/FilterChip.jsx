import React from 'react';

const FilterChip = React.memo(() => {
  return (
    <div className="chip-container">
      <div className="chip-list"></div>
      <button className="btn-clear">Clear</button>
    </div>
  );
});

export default FilterChip;
