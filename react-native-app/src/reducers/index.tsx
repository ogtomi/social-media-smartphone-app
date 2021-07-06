import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import signInReducer from "./signInReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  form: formReducer,
  sign: signInReducer,
  users: usersReducer
});
