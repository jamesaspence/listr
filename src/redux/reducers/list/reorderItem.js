import { listExistsWithIndex } from '../../../util/list';

const reorderItemReducer = (state, action) => {
  const {
    listId,
    sourceIndex,
    destinationIndex
  } = action;
  const { lists } = state;

  if (!listExistsWithIndex(lists, listId, sourceIndex)) {
    return state;
  }
  const items = lists[listId];

  if (items.length <= destinationIndex) {
    return state;
  }

  if (destinationIndex === sourceIndex) {
    return state;
  }

  const sortedItems = Array.from(items);
  sortedItems.splice(sourceIndex, 1);
  sortedItems.splice(destinationIndex, 0, items[sourceIndex]);

  return {
    ...state,
    lists: {
      ...lists,
      [listId]: sortedItems
    }
  };
};

export default reorderItemReducer;