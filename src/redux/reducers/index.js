import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import listReducer, { getPreloadedState as getListPreloadedState } from './list';

export const getPreloadedState = () => ({
  list: getListPreloadedState()
});

const createRootReducer = history => combineReducers({
  list: listReducer,
  router: connectRouter(history)
});

export default createRootReducer;