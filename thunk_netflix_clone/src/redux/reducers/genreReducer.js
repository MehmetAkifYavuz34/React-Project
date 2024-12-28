import { ActionTypes } from "../actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  genres: [],
};

const genreReducer = (state = initialState, { type, payload }) => {
  console.log("type:", type);
  console.log("payload:", payload);
  switch (type) {
    case ActionTypes.GENRES_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.GENRES_SUCCESS:
      return { ...state, isLoading: false, error: null, genres: payload };
    case ActionTypes.GENRES_ERROR:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};

export default genreReducer;
