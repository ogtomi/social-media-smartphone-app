import _ from "lodash";
import { CREATE_USER, FETCH_USERS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, ..._.mapKeys(action.payload.id) };
    case CREATE_USER:
      return { ...state, [action.payload.id]: action.payload}
    default:
      return state;
  }
};
