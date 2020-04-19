import { listExistsWithItem, getItemFromList } from '../../../util/list';

const toggleItemReducer = (state, action) => {
  const { listId, itemId } = action;
  const { lists } = state;

  if (!listExistsWithItem(lists, listId, itemId)) {
    return state;
  }

  const list = [ ...lists[listId] ];
  const item = getItemFromList(list, itemId);

  const index = list.indexOf(item);
  console.log('old', list[index].checked);
  list[index].checked = !list[index].checked;
  console.log('new', list[index].checked);

  return {
    ...state,
    lists: {
      ...lists,
      [listId]: list
    }
  };
};

export default toggleItemReducer;