import { CREATE_ITEM, DELETE_ITEM, REORDER_ITEM, TOGGLE_ITEM, TOGGLE_ALL_CHECKED, DELETE_ITEMS } from '../../actions/list';
import toggleItemReducer from './toggleItem';
import createItemReducer from './createItem';
import toggleAllCheckedReducer from './toggleAllChecked';
import { getDataFromStorage, clearData, hasStoredData } from '../../../util/localStorage';
import { generateNewId } from '../../../util/id';
import deleteItemReducer from './deleteItem';
import reorderItemReducer from './reorderItem';
import deleteItemsReducer from './deleteItems';

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
    case REORDER_ITEM:
      return reorderItemReducer(state, action);
    case TOGGLE_ALL_CHECKED:
      return toggleAllCheckedReducer(state, action);
    case DELETE_ITEMS:
      return deleteItemsReducer(state, action);
    default:
      return state;
  }

};

export default listReducer;