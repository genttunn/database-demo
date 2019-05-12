import ActionTypes from "./ActionTypes";
import axios from "axios";
import { API_ROOT } from "../constants/AppConstants";

// ACTION CREATORS (Action object creator functions)

// Idea_member SHOW ALL
export const fetchLineREQ = productLineList => ({
  type: ActionTypes.FETCH_PRODUCT_LINES,
  productLineList: productLineList
});

export function fetchLine() {
  return async (dispatch, getState) => {
    const ajaxRequest = {
      method: "get",
      url: API_ROOT + "/productLine/all"
    };
    axios(ajaxRequest)
      .then(response => {
        dispatch(fetchLineREQ(response.data));
      })
      .catch(error => {
        console.error("Error: " + error);
      })
      .then(() => {
        return {
          type: null
        }; // 'Empty' action object
      });
  };
}

export const fetchByLineREQ = currentLine => ({
  type: ActionTypes.FETCH_PRODUCT_BY_LINE,
  currentLine: currentLine
});

export function fetchByLine(id) {
  return async (dispatch, getState) => {
    const ajaxRequest = {
      method: "get",
      url: API_ROOT + "/product/byProductLineId/" + id
    };
    axios(ajaxRequest)
      .then(response => {
        dispatch(fetchByLineREQ(response.data));
      })
      .catch(error => {
        console.error("Error: " + error);
      })
      .then(() => {
        return {
          type: null
        }; // 'Empty' action object
      });
  };
}
