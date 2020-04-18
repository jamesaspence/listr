import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer, { getPreloadedState } from './reducers';

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => createStore(
  createRootReducer(history),
  getPreloadedState(),
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
);

export default configureStore;