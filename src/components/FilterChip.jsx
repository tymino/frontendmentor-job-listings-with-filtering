import React from 'react';

import { Chip } from '.';

const FilterChip = React.memo(({ chipNames, handleAction, withButton }) => {
  const handleClear = () => {
    handleAction({ type: 'CLEAR' });
  }
  return (
    <div className="chip-container">
      <div className="chip-list">
        {chipNames.map((type, index) => (
          <Chip key={`${type}-${index}`} name={type} handleAction={handleAction} withButton={withButton} />
        ))}
      </div>
      <button className="btn-clear" onClick={handleClear} >Clear</button>
    </div>
  );
});

export default FilterChip;
