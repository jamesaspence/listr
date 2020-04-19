import { listExistsWithItem } from '../../../util/list';

const deleteItemReducer = (state, action) => {
  const { lists } = state;
  const { listId, itemId } = action;

  if (!listExistsWithItem(lists, listId, itemId)) {
    return state;
  }

  return {
    ...state,
    lists: {
      ...lists,
      [listId]: lists[listId].filter(indvItem => indvItem.id !== itemId)
    }
  };
};

export default deleteItemReducer;