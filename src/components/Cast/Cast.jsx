import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'moviesAPI';
import css from './Cast.module.css';
import CastItem from 'components/CastItem/CastItem';

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const { movieID } = useParams();

  useEffect(() => {
    getMovieCast();
    // eslint-disable-next-line
  }, []);

  const getMovieCast = async () => {
    try {
      const movieCast = await fetchMovieCast(movieID);

      setCastList(movieCast.cast.slice(0, 20));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={css.castListContainer}>
      <ul className={css.castList}>
        {castList.map(cast => (
          <CastItem key={cast.id} cast={cast} />
        ))}
      </ul>
    </div>
  );
};

export default Cast;
