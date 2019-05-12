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

export const addProductLineREQ = () => ({
  type: ActionTypes.ADD_PRODUCT_LINE
});

export function addProductLine(newLine) {
  return async (dispatch, getState) => {
    const ajaxRequest = {
      method: "post",
      data: newLine,
      url: API_ROOT + "/productLine/"
    };
    axios(ajaxRequest)
      .then(response => {
        dispatch(addProductLineREQ());
        dispatch(fetchLine());
      })
      .catch(error => {
        console.error("Error: " + error);
        alert(error);
      })
      .then(() => {
        return {
          type: null
        }; // 'Empty' action object
      });
  };
}

export const delProductLineREQ = () => ({
  type: ActionTypes.DEL_PRODUCT_LINE
});

export function delProductLine(line) {
  console.log(line);
  return async (dispatch, getState) => {
    const ajaxRequest = {
      method: "delete",
      url: API_ROOT + "/productLine/" + line.id
    };
    axios(ajaxRequest)
      .then(response => {
        dispatch(delProductLineREQ());
        dispatch(fetchLine());
      })
      .catch(error => {
        console.error("Error: " + error);
        alert(error);
      })
      .then(() => {
        return {
          type: null
        }; // 'Empty' action object
      });
  };
}
export const addProductREQ = () => ({
  type: ActionTypes.ADD_PRODUCT
});

export function addProduct(newP) {
  return async (dispatch, getState) => {
    const ajaxRequest = {
      method: "post",
      url: API_ROOT + "/product/",
      data: newP
    };
    axios(ajaxRequest)
      .then(response => {
        dispatch(addProductREQ());
        dispatch(fetchByLine(newP.productLineId));
      })
      .catch(error => {
        console.error("Error: " + error);
        alert(error);
      })
      .then(() => {
        return {
          type: null
        }; // 'Empty' action object
      });
  };
}

export const delProductREQ = () => ({
  type: ActionTypes.DEL_PRODUCT
});

export function delProduct(product) {
  return async (dispatch, getState) => {
    const ajaxRequest = {
      method: "delete",
      url: API_ROOT + "/product/" + product.id
    };
    axios(ajaxRequest)
      .then(response => {
        dispatch(delProductREQ());
        dispatch(fetchByLine(product.productLineId));
      })
      .catch(error => {
        console.error("Error: " + error);
        alert(error);
      })
      .then(() => {
        return {
          type: null
        }; // 'Empty' action object
      });
  };
}
