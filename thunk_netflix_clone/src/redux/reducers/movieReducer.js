import { ActionTypes } from "../actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  movies: [],
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.MOVIES_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.MOVIES_ERROR:
      return { ...state, isLoading: false, error: payload };
    case ActionTypes.MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        movies: payload.results,
      };
    default:
      return state;
  }
};

export default movieReducer;
