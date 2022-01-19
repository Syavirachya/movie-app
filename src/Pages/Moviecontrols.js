import React, { useContext } from 'react';
import { GlobalContext } from "../Context/GlobalState";


export const Moviecontrols = ({type, movie}) => {
    const {
        removeMovieFromMovielist,
        addMovieToWatched,
        moveToMovielist,
        removeFromWatched,
      } = useContext(GlobalContext);


    return (
        <div className="inner-card-controls">
            {type === "movielist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromMovielist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToMovielist(movie)}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
    );
};
