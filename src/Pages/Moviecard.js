import React from 'react';
import { Moviecontrols } from '../Pages/Moviecontrols';

export const Moviecard = ({movie, type}) => {
    return (
        <div className="movie-card">
      <div className="overlay"></div>

     
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
          <Moviecontrols type={type} movie={movie} />
        </div>
    );
};
