import React from 'react';

import { Chip } from '.';

const Cart = ({ job }) => {
  const { logo, company, position, postedAt, contract, location, languages } = job;

  return (
    <div className="cart">
      <div className="cart__info info">
        <img className="info__avatar" src={logo} alt="" />

        <div className="info__describe describe">
          <div className="describe__company">{company}</div>

          {job.new && <div className="describe__new">New</div>}
          {job.featured && <div className="describe__featured">Featured</div>}

          <div className="describe__title">{position}</div>

          <div className="describe__sub-info sub-info">
            <div className="sub-info__data">{postedAt}</div>
            <div className="sub-info__separator"></div>
            <div className="sub-info__time">{contract}</div>
            <div className="sub-info__separator"></div>
            <div className="sub-info__type">{location}</div>
          </div>
        </div>
      </div>
      <div className="cart__chips">
        {languages.map((language, index) => (
          <Chip key={`${language}-${index}`} name={language} />
        ))}
        <Chip />
      </div>
    </div>
  );
};

export default Cart;
