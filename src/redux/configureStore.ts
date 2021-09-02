import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(): typeof createStore {
  // Redux devtools
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // Thunk allows us to do actions in redux as a function instead of an object
  return createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(thunk,  reduxImmutableStateInvariant()))
  );
}