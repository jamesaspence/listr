import { CREATE_ITEM, TOGGLE_ITEM } from '../../actions/list';
import toggleItemReducer from './toggleItem';
import createItemReducer from './createItem';

export const DEFAULT_LIST_ID = 12345;

export const DEFAULT_STATE = {
  lists: {
    [DEFAULT_LIST_ID]: [
      {
        text: 'Pizza',
        checked: false
      },
      {
        text: 'Bacon',
        checked: true
      }
    ]
  },
  activeList: DEFAULT_LIST_ID
};

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