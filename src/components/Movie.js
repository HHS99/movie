import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';


function Movie(props) {
  const {title, year, summary, poster, genres = []} = props;
  
  return (
    <div className="movie">
      <Link to={'/moive-detail'} state={{title, year, summary, poster, genres}}>
        <img src={poster} alt={title} title={title} />
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary.slice(0, 180)}...</p>
        <ul className="movie__genres">
          {genres.map((genre, index) => {
            return <li key={index} className="movie__genre">{genre}</li>
          })}
        </ul>
      </Link>
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
