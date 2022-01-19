import React, {useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Moviecard } from '../Pages/Moviecard';

export const Movielist = () => {
    const {movielist} = useContext(GlobalContext);

    return (
        <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>

          <span className="count-pill">
            {movielist.length} {movielist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {movielist.length > 0 ? (
          <div className="movie-grid">
            {movielist.map((movie) => (
             <Moviecard movie={movie} key={movie.id} type="movielist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
    );
};
