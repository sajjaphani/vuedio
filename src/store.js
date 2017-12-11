import { applyMiddleware, createStore, compose } from "redux"
import { fromJS } from 'immutable';
import thunk from "redux-thunk"
import logger from "redux-logger"
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'
import rootReducer from "./reducers"

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState, history) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middleware = composeEnhancers(
      applyMiddleware(
        thunk,
        routerMiddleware(history),
        sagaMiddleware,
        logger
      )
    );
  
    const store = createStore(rootReducer, fromJS(initialState), middleware);
  
    sagaMiddleware.run(rootSaga);
   
    return store;
  }