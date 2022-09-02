import { FETCH_PRRODUCTS } from "../types";

export const fetchProducts = () => async (dispatch) => {
  const res = await fetch("/api/products");
  const data = await res.json();
  dispatch({ type: FETCH_PRRODUCTS, payload: data });
};
