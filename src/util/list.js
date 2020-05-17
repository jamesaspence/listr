export const listExistsWithIndex = (lists, listId, index) => {
  return listExists(lists, listId) && lists[listId].length > index;
};

export const listExists = (lists, listId) => {
  return lists.hasOwnProperty(listId);
};

export const listExistsWithItem = (lists, listId, itemId) => {
  if (!listExists(lists, listId)) {
    return false;
  }

  return getItemFromList(lists[listId], itemId) != null;
};

export const getItemFromList = (list, itemId) => {
  return list.find(indvItem => indvItem.id === itemId);
};

