import ActionTypes from "../actions/ActionTypes";
const adminUID = "ZzPwQbNhArUvzq9RURiAz5ZT7jI2";
export const initialState = {
  admin: false,
  loggedIn: false,
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
      console.log(action.customer);
      console.log(adminUID === action.customer.uid ? true : false);
      return {
        ...state,
        currentCustomer: action.customer,
        admin: adminUID === action.customer.uid ? true : false
      };
    default:
      return state;
  }
}
