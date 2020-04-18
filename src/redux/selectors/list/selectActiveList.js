import { DEFAULT_LIST_ID } from '../../reducers/list';

const selectActiveList = state => {
  const { lists, activeList = DEFAULT_LIST_ID } = state.list;

  if (!lists.hasOwnProperty(activeList)) {
    return null;
  }

  return lists[activeList];
};

export default selectActiveList;