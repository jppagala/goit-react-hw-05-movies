import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const SearchForm = ({ submitHandle, query }) => {
  const [queryWord, setQueryWord] = useState('');
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setQueryWord(query);
    // eslint-disable-next-line
  }, []);

  const handleChange = event => {
    setQueryWord(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: queryWord });
    submitHandle(queryWord);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={queryWord}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <Outlet />
    </div>
  );
};

SearchForm.propTypes = {
  submitHandle: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default SearchForm;
