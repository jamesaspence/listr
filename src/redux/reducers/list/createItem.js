const createItemReducer = (state, action) => {
  const { listId, value } = action;
  const { lists } = state;

  if (!lists.hasOwnProperty(listId)) {
    return state;
  }

  const list = lists[listId];
  return {
    ...state,
    lists: {
      ...lists,
      [listId]: list.concat({
        text: value,
        checked: false
      })
    }
  };
};

export default createItemReducer;