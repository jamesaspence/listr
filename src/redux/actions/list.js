export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const CREATE_ITEM = 'CREATE_ITEM';

export const toggleItem = (listId, index) => ({
  type: TOGGLE_ITEM,
  listId,
  index
});

export const createItem = (listId, value) => ({
  type: CREATE_ITEM,
  listId,
  value
});