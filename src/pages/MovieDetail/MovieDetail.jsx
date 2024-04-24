import React, { useState, useEffect, Suspense } from 'react';
import { IMG_URL, fetchMovieDetails } from 'moviesAPI';
import { Link, useLocation, useParams, Outlet } from 'react-router-dom';
import css from './MovieDetail.module.css';

const MovieDetail = () => {
  const [movieList, setMovieList] = useState({});
  const [genres, setGenres] = useState('');
  const [releaseYear, setReleaseYear] = useState('');

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const { movieID } = useParams();

  useEffect(() => {
    getMovieDetails();
    // eslint-disable-next-line
  }, []);

  const getMovieDetails = async () => {
    try {
      const movieData = await fetchMovieDetails(movieID);

      setMovieList(movieData);
      setGenres(genresToString(movieData.genres));
      setReleaseYear(getReleaseYear(movieData.release_date));
      return movieData;
    } catch (error) {
      console.log(error);
    }
  };

  const genresToString = genres => {
    if (genres.length > 0) return genres.map(genre => genre.name).join(', ');

    return '';
  };

  const getReleaseYear = releaseDate => {
    return `(${releaseDate.split('-')[0]})`;
  };

  //
  //
  //
  const { title, poster_path, overview, vote_average } = movieList;

  return (
    <div className={css.movieAllDetails}>
      <Link to={backLinkHref}>
        <button type="button" className={css.button}>
          &lt; Go Back
        </button>
      </Link>
      <div className={css.movieDetails}>
        <img
          src={`${IMG_URL + poster_path}`}
          alt={title}
          className={css.moviePoster}
        />
        <div className={css.movieInfo}>
          <h3>
            {title} {releaseYear}
          </h3>
          <p>Rating: {vote_average}</p>
          <h4>OverView</h4>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres}</p>
        </div>
      </div>
      <div className={css.moreInfo}>
        <h3>Additional Information</h3>
        <Link
          to={`/movies/${movieID}/cast`}
          state={{ from: backLinkHref }}
          className={css.links}
        >
          Cast (first 20 only)
        </Link>
        <br />
        <Link
          to={`/movies/${movieID}/reviews`}
          state={{ from: backLinkHref }}
          className={css.links}
        >
          Reviews
        </Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetail;
