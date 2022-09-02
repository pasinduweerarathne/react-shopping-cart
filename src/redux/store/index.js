import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "../reducers/productReducers";

const initialState = {};

const componseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    products: productsReducer,
  }),
  initialState,
  componseEnhancer(applyMiddleware(thunk))
);

export default store;
