import { SET_ALBUMS, SET_ERROR } from "./actions";

const initialState = {
  albums: [],
  error: ""
};

export const reducer = (state = initialState, action) => {
  if (action.type === SET_ALBUMS) {
    return {
      ...state,
      albums: action.albums
    };
  } else if (action.type === SET_ERROR) {
    return {
      ...state,
      error: action.error
    };
  }
  return state;
};
