export const TOGGLE_ITEM = 'TOGGLE_ITEM';

export const toggleItem = (listId, index) => ({
  type: TOGGLE_ITEM,
  listId,
  index
});