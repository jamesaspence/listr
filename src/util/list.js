export const listExistsWithItem = (lists, listId, itemId) => {
  if (!lists.hasOwnProperty(listId)) {
    return false;
  }

  return getItemFromList(lists[listId], itemId) != null;
};

export const getItemFromList = (list, itemId) => {
  return list.find(indvItem => indvItem.id === itemId);
};

