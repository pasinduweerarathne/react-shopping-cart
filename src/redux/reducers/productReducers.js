import { FETCH_PRRODUCTS } from "../types";

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRRODUCTS:
      return { items: action.payload };
    default:
      return state;
  }
};
