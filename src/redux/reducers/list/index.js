import { CREATE_ITEM, DELETE_ITEM, TOGGLE_ITEM } from '../../actions/list';
import toggleItemReducer from './toggleItem';
import createItemReducer from './createItem';
import { getDataFromStorage, clearData, hasStoredData } from '../../../util/localStorage';
import { generateNewId } from '../../../util/id';
import deleteItemReducer from './deleteItem';

const generateInitialState = () => {
  const listId = generateNewId();
  return {
    ...DEFAULT_STATE,
    lists: {
      [listId]: []
    },
    activeList: listId
  };
};

export const DEFAULT_STATE = {
  lists: {},
  activeList: null
};

export const getPreloadedState = () => {
  if (!hasStoredData()) {
    return generateInitialState();
  }

  let data;
  try {
    data = getDataFromStorage();
  } catch (e) {
    clearData();
    return generateInitialState();
  }

  const { lists, activeList = null } = data;
  if (lists == null || !(typeof lists === 'object') || lists.length < 1) {
    clearData();
    return generateInitialState();
  }

  return {
    ...DEFAULT_STATE,
    lists,
    activeList
  };
};

const listReducer = (state = DEFAULT_STATE, action) => {
  const { type } = action;

  switch (type) {
    case TOGGLE_ITEM:
      return toggleItemReducer(state, action);
    case CREATE_ITEM:
      return createItemReducer(state, action);
    case DELETE_ITEM:
      return deleteItemReducer(state, action);
    default:
      return state;
  }

};

export default listReducer;