import { useEffect } from "react";
import { useState } from "react";
import Movie from "../components/Movie";
import './Home.css';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch("https://yts-proxy.now.sh/list_movies.json");
      const responseData = await response.json();
      setMovies(responseData.data.movies);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Home;
