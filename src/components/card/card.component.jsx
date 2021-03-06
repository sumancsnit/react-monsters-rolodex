import React from 'react';
import PropTypes from 'prop-types';
import './card.style.css';

const Card = (props) => {
  const { cat } = props;
  return (
    <div className='card-container'>
      <img
        alt='cat'
        src={`https://robohash.org/${cat.id}?set=set4&size=180x180`}
      />
      <h1>{cat.name}</h1>
      <p>{cat.email}</p>
    </div>
  );
};

Card.propTypes = {
  cat: PropTypes.objectOf(PropTypes.any),
};

export default Card;
