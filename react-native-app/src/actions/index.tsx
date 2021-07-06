import users from "../apis/users";
import { SIGN_IN, SIGN_OUT, FETCH_USERS, CREATE_USER } from "./types";

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
export const createUser = (name, surname, email, password) => async (dispatch, getState ) => {
  const newUser = {
    name: name,
    surname: surname,
    email: email,
    password: password
  }
  console.log(newUser)
  const response = await users.post("/user", { ...newUser })
  
  dispatch({ type: CREATE_USER, payload: response.data})
}
export const fetchUsers = () => async (dispatch) => {
  const response = await users.get("/user")
  dispatch({ type: FETCH_USERS, payload: response.data})
}
