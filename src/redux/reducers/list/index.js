import { CREATE_ITEM, TOGGLE_ITEM } from '../../actions/list';
import toggleItemReducer from './toggleItem';
import createItemReducer from './createItem';
import { getLists } from '../../../util/localStorage';

export const DEFAULT_LIST_ID = 12345;

export const DEFAULT_STATE = {
  lists: {
    [DEFAULT_LIST_ID]: []
  },
  activeList: DEFAULT_LIST_ID
};

export const getPreloadedState = () => ({
  ...DEFAULT_STATE,
  ...getLists()
});

const listReducer = (state = DEFAULT_STATE, action) => {
  const { type } = action;

  switch (type) {
    case TOGGLE_ITEM:
      return toggleItemReducer(state, action);
    case CREATE_ITEM:
      return createItemReducer(state, action);
    default:
      return state;
  }

};

export default listReducer;