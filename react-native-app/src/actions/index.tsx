import users from "../apis/users";
import { SIGN_IN, SIGN_OUT, FETCH_USERS } from "./types";

export const signIn = (email, password) => {
  return {
    type: SIGN_IN,
    payload: { email, password },
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const fetchUsers = () => async (dispatch) => {
  const response = await users.get("/user")
  dispatch({ type: FETCH_USERS, payload: response.data})
}
