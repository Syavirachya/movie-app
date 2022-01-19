import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Moviecard} from '../Pages/Moviecard';

export const Watched = () => {
    const { watched } = useContext(GlobalContext);

    return (
        <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="heading">Watched Movies</h1>
  
            <span className="count-pill">
              {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
            </span>
          </div>
  
          {watched.length > 0 ? (
            <div className="movie-grid">
              {watched.map((movie) => (
                <Moviecard movie={movie} key={movie.id} type="watched" />
              ))}
            </div>
          ) : (
            <h2 className="no-movies">No movies in your list! Add some!</h2>
          )}
        </div>
      </div>
    );
};
