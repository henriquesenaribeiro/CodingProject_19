// src/components/TourCard.jsx
import React, { useState } from 'react';

const TourCard = ({ id, name, info, price, image, onRemove }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour-card">
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <h4>${price}</h4>
        <p>
          {readMore ? info : `${info.substring(0, 150)}... `}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button className="btn" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default TourCard;