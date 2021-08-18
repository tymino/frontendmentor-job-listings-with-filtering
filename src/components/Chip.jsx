import React from 'react';

const Chip = ({ name, handleAction, withButton }) => {
  const handleClick = () => {
    handleAction({
      type: 'ADD',
      name,
    });
  };

  const handleRemove = () => {
    handleAction({
      type: 'REMOVE',
      name,
    });
  };

  return (
    <div className="chip" id='chip'>
      <div className="chip__name" onClick={handleClick}>
        {name}
      </div>
      {withButton && (
        <img
          onClick={handleRemove}
          className="chip__remove"
          src="./assets/images/icon-remove.svg"
          alt="remove"
        />
      )}
    </div>
  );
};

export default Chip;
