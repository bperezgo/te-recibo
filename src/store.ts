import {
  CombinedState,
  AnyAction,
  Reducer,
  applyMiddleware,
  createStore,
  combineReducers,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import {} from './@types';

const middleware =
  process.env.NODE_ENV === 'development'
    ? applyMiddleware(promise, thunk, createLogger())
    : applyMiddleware(promise, thunk);
const middlewares = [middleware];

if (
  process.env.NODE_ENV === 'development' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__
) {
  middlewares.push((window as any).__REDUX_DEVTOOLS_EXTENSION__());
}

const rootReducer: Reducer<unknown[], AnyAction> = (
  state: any,
  action: AnyAction
) => {
  return combineReducers(reducers)(state, action);
};

const store = createStore(rootReducer, compose(...middlewares));
export default store;
