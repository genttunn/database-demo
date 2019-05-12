import ActionTypes from "../actions/ActionTypes";

export const initialState = {
  loggedIn: 0,
  currentCustomer: null
};

export default function loginUsers(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOG_IN:
      return {
        ...state,
        loggedIn: action.status
      };
    case ActionTypes.LOG_USER:
      return {
        ...state,
        currentCustomer: action.customer
      };
    default:
      return state;
  }
}
