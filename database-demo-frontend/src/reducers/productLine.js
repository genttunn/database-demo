import ActionTypes from "../actions/ActionTypes";

export const initialState = {
  isLoading: false,
  productLineList: [],
  currentLine: []
};

export default function productLine(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCT_LINES:
      return {
        ...state,
        productLineList: action.productLineList,
        isLoading: false
      };
    case ActionTypes.FETCH_PRODUCT_BY_LINE:
      return {
        ...state,
        currentLine: action.currentLine
      };
    case ActionTypes.ADD_PRODUCT_LINE:
      return {
        ...state,
        isLoading: false
      };
    case ActionTypes.DEL_PRODUCT_LINE:
      return {
        ...state,
        isLoading: false
      };
    case ActionTypes.ADD_PRODUCT:
      return {
        ...state,
        isLoading: false
      };
    case ActionTypes.DEL_PRODUCT_:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
