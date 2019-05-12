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
    default:
      return state;
  }
}
