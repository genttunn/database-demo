import { combineReducers } from "redux";

import login from "./login";
import productLine from "./productLine";
const rootReducer = () =>
  combineReducers({
    login,
    productLine
  });

export default rootReducer;
