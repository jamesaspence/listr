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
  const item = list.find(indvItem => indvItem.id === itemId);
  // convert undefined -> null
  return item == null ? null : item;
};

export const listAllChecked = (list) => {
  return list.every(indvItem => indvItem.checked);
};