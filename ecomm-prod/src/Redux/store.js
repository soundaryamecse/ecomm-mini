import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import productReducer from "./Products/productReducer"
import thunk from "redux-thunk";

const rootReducer = combineReducers(
  {product: productReducer
    });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);