import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import signInReducer from "./signInReducer";

export default combineReducers({
  form: formReducer,
  sign: signInReducer,
});
