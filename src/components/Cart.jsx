import React from 'react';

import { Chip } from '.';

const Cart = ({
  job: {
    logo,
    company,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
    new: newCart,
    featured,
  },
  handleGetName,
}) => {
  const dataForChip = [role, level, ...languages, ...tools];

  return (
    <div className="cart">
      <div className="cart__info info">
        <img className="info__avatar" src={logo} alt="" />

        <div className="info__describe describe">
          <h3 className="describe__company">{company}</h3>

          {newCart && <div className="describe__new">New</div>}
          {featured && <div className="describe__featured">Featured</div>}

          <h2 className="describe__title">{position}</h2>

          <div className="describe__sub-info sub-info">
            <p className="sub-info__data">{postedAt}</p>
            <div className="sub-info__separator"></div>
            <p className="sub-info__time">{contract}</p>
            <div className="sub-info__separator"></div>
            <p className="sub-info__type">{location}</p>
          </div>
        </div>
      </div>
      <div className="cart__chips">
        {dataForChip.map((type, index) => (
          <Chip key={`${type}-${index}`} name={type} handleGetName={handleGetName} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
