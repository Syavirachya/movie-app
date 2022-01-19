import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState ={
    movielist: localStorage.getItem("movielist")
    ? JSON.parse(localStorage.getItem("movielist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

//create context
export const GlobalContext = createContext(initialState);


//provider components
export const GlobalProvider = (props) => {
 const [state, dispatch] = useReducer(AppReducer, initialState);


 useEffect(() => {
     localStorage.setItem('movielist', JSON.stringify(state.movielist));
     localStorage.setItem("watched", JSON.stringify(state.watched));
 }, [state]);
//actions
const addMovieToMovielist = (movie) =>{
    dispatch({type: "ADD_MOVIE_TO_MOVIELIST", payload: movie});
};

const removeMovieFromMovielist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_MOVIELIST", payload: id });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

//move to Movielist
  const moveToMovielist = (movie) => {
    dispatch({ type: "MOVE_TO_MOVIELIST", payload: movie });
  };
  
//Remove from watchlist
  const removeFromWatched = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
  };

 return(
     <GlobalContext.Provider 
     value={{
         movielist: state.movielist, 
         watched: state.watched, 
         addMovieToMovielist,
         removeMovieFromMovielist,
         addMovieToWatched,
         moveToMovielist,
         removeFromWatched,
        }}
     >
         {props.children}
     </GlobalContext.Provider>
 )
};