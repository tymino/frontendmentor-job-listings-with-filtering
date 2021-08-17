import React from 'react';

const Chip = ({ name, handleGetName }) => {
  const handleClick = () => {
    handleGetName(name);
  };

  return (
    <div className="chip" onClick={handleClick}>
      {name}
    </div>
  );
};

export default Chip;
