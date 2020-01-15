import { combineReducers } from "redux";
import postsReducers from "./postsReducer";
import usersReducers from "./usersReducer";

export default combineReducers({
  //dummy keys, avoid error message
  posts: postsReducers,
  users: usersReducers
});
