import { listExists, listAllChecked } from '../../../util/list';

const toggleAllCheckedReducer = (state, action) => {
  const { lists } = state;
  const { listId } = action;

  if (!listExists(lists, listId)) {
    return state;
  }

  const list = Array.from(lists[listId]);
  const newlyCheckedStatus = !listAllChecked(list);
  return {
    ...state,
    lists: {
      ...lists,
      [listId]: list.map(indvItem => {
        indvItem.checked = newlyCheckedStatus;
        return indvItem;
      })
    }
  };
};

export default toggleAllCheckedReducer;