import { listExistsWithItem } from '../../../util/list';

const reorderItemReducer = (state, action) => {
  const {
    listId,
    itemId,
    source,
    destination
  } = action;
  const { lists } = state;

  if (!listExistsWithItem(lists, listId, itemId)) {
    return state;
  }

  const items = lists[listId];
  const sortedItems = Array.from(items);
  sortedItems.splice(source.index, 1);
  sortedItems.splice(destination.index, 0, items[source.index]);

  return {
    ...state,
    lists: {
      ...lists,
      [listId]: sortedItems
    }
  };
};

export default reorderItemReducer;