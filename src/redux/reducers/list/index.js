import { TOGGLE_ITEM } from '../../actions/list';
import toggleItemReducer from './toggleItem';

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
    default:
      return state;
  }

};

export default listReducer;