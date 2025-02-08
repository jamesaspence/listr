export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const CREATE_ITEM = 'CREATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const REORDER_ITEM = 'REORDER_ITEM';
export const TOGGLE_ALL_CHECKED = 'TOGGLE_ALL_CHECKED';
export const DELETE_ITEMS = 'DELETE_ITEMS';

export const CHECKED_ITEMS = 'CHECKED_ITEMS';
export const ALL_ITEMS = 'ALL_ITEMS';

export const toggleItem = (listId, itemId) => ({
  type: TOGGLE_ITEM,
  listId,
  itemId
});

export const createItem = (listId, value) => ({
  type: CREATE_ITEM,
  listId,
  value
});

export const deleteItem = (listId, itemId) => ({
  type: DELETE_ITEM,
  listId,
  itemId
});

export const reorderItem = (listId, sourceIndex, destinationIndex) => ({
  type: REORDER_ITEM,
  listId,
  sourceIndex,
  destinationIndex
});

export const toggleAllChecked = listId => ({
  type: TOGGLE_ALL_CHECKED,
  listId
});

export const deleteItems = (listId, criteria = CHECKED_ITEMS) => ({
  type: DELETE_ITEMS,
  listId,
  criteria
});