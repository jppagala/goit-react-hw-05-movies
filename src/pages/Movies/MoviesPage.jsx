import React, { useState, useEffect } from 'react';
import css from './MoviesPage.module.css';
import MovieList from 'components/MovieList/MovieList';
import { fetchQuery } from 'moviesAPI';
import SearchForm from 'components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [queryMovies, setQueryMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');

    if (query !== null) {
      getQueryMovies(query);
    }
    // eslint-disable-next-line
  }, []);

  const getQueryWord = () => {
    const query = searchParams.get('query');

    if (query !== null) {
      return query;
    }

    return '';
  };

  const getQueryMovies = async keyword => {
    setIsLoading(true);
    try {
      const receivedQuery = await fetchQuery(keyword);

      setQueryMovies(receivedQuery.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleSubmit = keyword => {
    getQueryMovies(keyword);
  };

  return (
    <div className={css.moviePage}>
      <SearchForm submitHandle={handleSubmit} query={getQueryWord()} />
      {isLoading ? <div>Loading...</div> : <MovieList movies={queryMovies} />}
    </div>
  );
};

export default MoviesPage;
