import React from 'react';
import PropTypes from 'prop-types';
import css from './MovieList.module.css';
import MoviesListItem from 'components/MoviesListItem/MoviesListItem';

const MovieList = ({ movies }) => {
  return (
    <div className={css.movieListContainer}>
      <ul className={css.movieList}>
        {movies.map(movie => (
          <MoviesListItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
