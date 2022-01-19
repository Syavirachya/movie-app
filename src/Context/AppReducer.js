export default (state, action) => {
    switch(action.type){
        case "ADD_MOVIE_TO_MOVIELIST":
            return{
                ...state,
                movielist:[action.payload, ...state.movielist],
            };
        case "REMOVE_MOVIE_FROM_MOVIELIST":
             return {
                  ...state,
                  movielist: state.movielist.filter(
                    (movie) => movie.id !== action.payload
                  ),
             };
        case "ADD_MOVIE_TO_WATCHED":
            return {
                  ...state,
                  movielist: state.movielist.filter(
                    (movie) => movie.id !== action.payload.id
                  ),
                  watched: [action.payload, ...state.watched],
            };
        case "MOVE_TO_MOVIELIST":
            return {
                  ...state,
                  watched: state.watched.filter(
                    (movie) => movie.id !== action.payload.id
                  ),
                  movielist: [action.payload, ...state.movielist],
            };
        case "REMOVE_FROM_WATCHED":
            return {
                  ...state,
                  watched: state.watched.filter((movie) => movie.id !== action.payload),
            };
        default:
        return state;
    }
};