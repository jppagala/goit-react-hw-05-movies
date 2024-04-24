import React from 'react';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const getClassName = ({ isActive }) => (isActive ? css.active : css.inactive);

  return (
    <div className={css.headerContainer}>
      <NavLink to={'/'} className={getClassName}>
        Home
      </NavLink>
      <NavLink to={'/movies'} className={getClassName}>
        Movies
      </NavLink>
    </div>
  );
};

export default Header;
