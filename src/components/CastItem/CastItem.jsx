import React from 'react';
import PropTypes from 'prop-types';
import { IMG_URL, NO_IMG } from 'moviesAPI';
import css from './CastItem.module.css';

const CastItem = ({ cast }) => {
  const { character, name, profile_path } = cast;

  return (
    <li>
      <div className={css.castCard}>
        <img
          src={`${profile_path !== null ? IMG_URL + profile_path : NO_IMG}`}
          alt={name}
          className={css.castPhoto}
        />
        <div className={css.castInfo}>
          <h4>{name}</h4>
          <p>{character}</p>
        </div>
      </div>
    </li>
  );
};

CastItem.propTypes = {
  cast: PropTypes.object.isRequired,
};

export default CastItem;
