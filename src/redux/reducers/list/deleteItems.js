import { listExists } from '../../../util/list';
import { ALL_ITEMS, CHECKED_ITEMS } from '../../actions/list';

const deleteItemsReducer = (state, action) => {
  const { lists } = state;
  const { listId, criteria } = action;

  if (!listExists(lists, listId)) {
    return state;
  }

  let criteriaFilter;
  switch (criteria) {
    case ALL_ITEMS:
      criteriaFilter = () => false;
      break;
    case CHECKED_ITEMS:
      criteriaFilter = (indvItem => !indvItem.checked);
      break;
  }

  return {
    ...state,
    lists: {
      ...lists,
      [listId]: lists[listId].filter(criteriaFilter)
    }
  };
};

export default deleteItemsReducer;