import React from 'react';

const Chip = ({ name, handleGetName }) => {
  const handleClick = () => {
    handleGetName({
      type: 'ADD',
      name,
    });
  };

  const handleRemove = () => {
    handleGetName({
      type: 'REMOVE',
      name,
    });
  };

  return (
    <div className="chip">
      <div className="chip__name" onClick={handleClick}>
        {name}
      </div>
      <img
        onClick={handleRemove}
        className="chip__remove"
        src="./assets/images/icon-remove.svg"
        alt="remove"
      />
    </div>
  );
};

export default Chip;
