import React from 'react';
import PropTypes from 'prop-types';
import css from './ReviewItem.module.css';

const ReviewItem = ({ review }) => {
  const { author, content } = review;

  return (
    <li>
      <div className={css.reviewCard}>
        <div className={css.reviewInfo}>
          <h4>{author}</h4>
          <p>{content}</p>
        </div>
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewItem;
