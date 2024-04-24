import React, { useEffect, useState } from 'react';
import { fetchMovieReview } from 'moviesAPI';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';
import ReviewItem from 'components/ReviewItem/ReviewItem';

const Reviews = () => {
  const [reviewList, setReviewList] = useState([]);

  const { movieID } = useParams();

  useEffect(() => {
    getMovieReview();
    // eslint-disable-next-line
  }, []);

  const getMovieReview = async () => {
    try {
      const movieReview = await fetchMovieReview(movieID);
      setReviewList(movieReview.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={css.reviewListContainer}>
      <ul className={css.reviewList}>
        {reviewList.length > 0
          ? reviewList.map(review => (
              <ReviewItem key={review.id} review={review} />
            ))
          : `No reviews yet`}
      </ul>
    </div>
  );
};

export default Reviews;
