import jsonPlaceholder from "../apis/jsonPlaceholder";
// action creator
// shorten statement
export const fetchPosts = () => async dispatch => {
  // with redux-thunk, we can use async await syntax
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response });
};
