import React, { useEffect, useState } from 'react';
import css from './Home.module.css';
import MovieList from 'components/MovieList/MovieList';
import { fetchTrending } from 'moviesAPI';

const Home = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTrending = async () => {
    setIsLoading(true);
    try {
      const receivedMovies = await fetchTrending();
      setMoviesTrending(receivedMovies.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <div className={css.home}>
      <h2>Top 20 Trending Movies</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <MovieList movies={moviesTrending} />
      )}
    </div>
  );
};

export default Home;
