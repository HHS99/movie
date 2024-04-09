import React from "react";
import PropTypes from 'prop-types';
import './Movie.css';

function Movie(props) {
  const {title, year, summary, poster, genres = []} = props;
  
  return (
    <div className="moive__data">
      <img src={poster} alt={title} title={title} />
      <h3 className="movie__title">{title}</h3>
      <h5 className="movie__year">{year}</h5>
      <p className="movie__summary">{summary}</p>
      <ul className="movie__genres">
        {genres.map((genre) => {
          return <li className="movie__genre">{genre}</li>
        })}
      </ul>
    </div>
  );
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
