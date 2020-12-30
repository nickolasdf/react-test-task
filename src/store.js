import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(combineReducers(reducers), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);