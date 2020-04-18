const toggleItemReducer = (state, action) => {
  const { listId, index } = action;
  const { lists } = state;

  if (!lists.hasOwnProperty(listId)) {
    return state;
  }

  const list = [ ...lists[listId] ];
  if (list.length <= index) {
    return state;
  }

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