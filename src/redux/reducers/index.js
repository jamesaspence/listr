import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import listReducer, { DEFAULT_STATE as LIST_DEFAULT_STATE } from './list';

export const DEFAULT_STATE = {
  list: LIST_DEFAULT_STATE
};

const createRootReducer = history => combineReducers({
  list: listReducer,
  router: connectRouter(history)
});

export default createRootReducer;