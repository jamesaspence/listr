import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer, { DEFAULT_STATE } from './reducers';

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => createStore(
  createRootReducer(history),
  DEFAULT_STATE,
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
);

export default configureStore;