import selectActiveList from './selectActiveList';

const selectActiveListCount = state => {
  const activeList = selectActiveList(state);

  if (activeList === null) {
    return 0;
  }

  return activeList.length;
};

export default selectActiveListCount;