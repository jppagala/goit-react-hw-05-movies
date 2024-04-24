import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './MoviesListItem.module.css';

const MoviesListItem = ({ movie }) => {
  const { title } = movie;

  const location = useLocation();

  return (
    <li className={css.movieItem}>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  );
};

MoviesListItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MoviesListItem;
