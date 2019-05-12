import ActionTypes from "./ActionTypes";
import axios from "axios";
import { API_ROOT } from "../constants/AppConstants";

// ACTION CREATORS (Action object creator functions)

// Idea_member SHOW ALL
export const loginREQ = status => ({
  type: ActionTypes.LOG_IN,
  status: status
});

export function login(status) {
  return async (dispatch, getState) => {
    dispatch(loginREQ(status));
  };
}

///////////////////////////////////////////

export const loginUSER_REQ = customer => ({
  type: ActionTypes.LOG_USER,
  customer: customer
});
export function loginUSER(customer) {
  let customerToCheck = {
    firstName: customer.firstName,
    email: customer.email
    // uid: customer.uid
  };
  return async (dispatch, getState) => {
    const ajaxRequest = {
      method: "post",
      url: API_ROOT + "/customer",
      data: customerToCheck
    };
    axios(ajaxRequest)
      .then(response => {
        dispatch(loginUSER_REQ(customer));
      })
      .catch(error => {
        let errorMsg = error;
        if (
          errorMsg == "Error: Request failed with status code 400" ||
          errorMsg == "Error: Request failed with status code 409"
        ) {
          dispatch(loginUSER_REQ(customer));
          return;
        } else {
          alert(error);
        }
      })
      .then(() => {
        return {
          type: null
        }; // 'Empty' action object
      });
  };
}
