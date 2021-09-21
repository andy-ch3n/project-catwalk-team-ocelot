import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import uniqid from 'uniqid';

const RatingBar = ({
  total, ratings, handleChange, starFilter,
}) => {
  const arrayHolder = [5, 4, 3, 2, 1];
  const [colorClick, setcolorClick] = useState(false);
  const progressBar = arrayHolder.map((star) => {
    const toNumberStar = Number(ratings[star]) || 0;
    const rating = toNumberStar ? (toNumberStar / total) * 100 : 0;
    return (
      <div key={uniqid()}>
        <p className="progress-label">
          <input className="check-box-rating" type="checkbox" checked={starFilter[star]} value={star.toString()} onChange={handleChange} />
          <u style={starFilter[star] ? { color: 'green' } : { color: 'black' }}>
            {star}
            {' '}
            Stars
          </u>
        </p>
        <ProgressBar style={{ width: '57%', height: '7px' }} now={rating} />
      </div>
    );
  });
  return (
    <div id="progress-bar" className="row">
      {progressBar}
    </div>
  );
};

export default RatingBar;
