import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  email: "someemails",
  password: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        email: action.payload.email,
        password: action.payload.password,
      };
    case SIGN_OUT:
      return { ...state, isSignedIN: false, email: null, password: null };
    default:
      return state;
  }
};
