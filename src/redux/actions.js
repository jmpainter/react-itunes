export const GET_ALBUMS = "GET_ALBUMS";
export const SET_ALBUMS = "SET_ALBUMS";
export const SET_ERROR = "SET_ERROR";

const setAlbums = albums => ({
  type: SET_ALBUMS,
  albums
});

const setError = error => ({
  type: SET_ERROR,
  error
});

export const getAlbums = () => {
  return dispatch => {
    return fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
      .then(res => res.json())
      .then(data => dispatch(setAlbums(data.feed.entry)))
      .catch(error => dispatch(setError(error)));
  };
};
