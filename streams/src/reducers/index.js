import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form"; //rename on the fly

export default combineReducers({
  auth: authReducer,
  form: formReducer
});
