import { generateNewId } from '../../../util/id';

const itemAlreadyExistsWithId = (id, items) => {
  const existingItem = items.find(item => item.id === id);
  return existingItem != null;
};

const createItemReducer = (state, action) => {
  const { listId, value } = action;
  const { lists } = state;

  if (!lists.hasOwnProperty(listId)) {
    return state;
  }

  const list = lists[listId];
  let id = generateNewId();
  while (itemAlreadyExistsWithId(id, list)) {
    id = generateNewId();
  }

  return {
    ...state,
    lists: {
      ...lists,
      [listId]: list.concat({
        id,
        text: value,
        checked: false
      })
    }
  };
};

export default createItemReducer;