const toggleItemReducer = (state, action) => {
  const { listId, itemId } = action;
  const { lists } = state;

  if (!lists.hasOwnProperty(listId)) {
    return state;
  }

  const list = [ ...lists[listId] ];
  const item = list.find(indvItem => indvItem.id === itemId);

  if (item == null) {
    return state;
  }

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