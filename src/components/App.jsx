import React, { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import css from './App.module.css';

const SharedLayout = lazy(() => import('pages/SharedLayout/SharedLayout'));
const MovieDetail = lazy(() => import('pages/MovieDetail/MovieDetail'));
const Home = lazy(() => import('pages/Home/Home'));
const MoviesPage = lazy(() => import('pages/Movies/MoviesPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  useEffect(() => {
    if (window.location.pathname !== '/') {
      window.location.href = '/';
    }
  }, []);

  return (
    <div className={css.app}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieID" element={<MovieDetail />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
