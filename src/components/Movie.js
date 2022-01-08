import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({ title, summary, poster }) {
  return (
    <div className="movie">
      <Link to={{ pathname: '/movie-detail', state: { title, summary, poster } }}>
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <p className="movie__summary">{summary.slice(0, 180)}</p>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;