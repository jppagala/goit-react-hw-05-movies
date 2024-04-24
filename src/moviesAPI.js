import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'a2c7d2d073818941fb1c125f7881370d';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';
export const NO_IMG =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7T4483J4CFpRqhM-R1dSiLGv-BwRSb_k7Mk3ESIY6DYfCt7kd';

export const fetchTrending = async () => {
  const trendingMovies = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return trendingMovies.data;
};

export const fetchQuery = async keyword => {
  const queryMovies = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${keyword}`
  );
  return queryMovies.data;
};

export const fetchMovieDetails = async movieId => {
  const movieDetails = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return movieDetails.data;
};

export const fetchMovieCast = async movieId => {
  const movieCast = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return movieCast.data;
};

export const fetchMovieReview = async movieId => {
  const movieReview = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return movieReview.data;
};
