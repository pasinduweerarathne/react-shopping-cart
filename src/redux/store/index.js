import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "../reducers/cartRedeucers";
import { productsReducer } from "../reducers/productReducers";

const initialState = {};

const componseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    products: productsReducer,
    cart: cartReducer,
  }),
  initialState,
  componseEnhancer(applyMiddleware(thunk))
);

export default store;
