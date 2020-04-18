import selectActiveListId from './selectActiveListId';

const selectActiveList = state => {
  const { lists } = state.list;
  const activeList = selectActiveListId(state);

  if (!lists.hasOwnProperty(activeList)) {
    return null;
  }

  return lists[activeList];
};

export default selectActiveList;