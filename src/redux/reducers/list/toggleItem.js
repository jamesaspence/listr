import { listExistsWithItem, getItemFromList } from '../../../util/list';

const toggleItemReducer = (state, action) => {
  const { listId, itemId } = action;
  const { lists } = state;

  if (!listExistsWithItem(lists, listId, itemId)) {
    return state;
  }

  const list = lists[listId];
  const item = getItemFromList(list, itemId);

  const index = list.indexOf(item);
  list[index].checked = !list[index].checked;

  return {
    ...state,
    lists: {
      ...lists,
      [listId]: list
    }
  };
};

export default toggleItemReducer;