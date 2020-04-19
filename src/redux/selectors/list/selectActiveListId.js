const selectActiveListId = state => {
  const { list: { lists, activeList } } = state;

  if (activeList == null || !lists.hasOwnProperty(activeList)) {
    const listIds = Object.keys(lists);

    return listIds.length < 1 ? null : listIds[0];
  }

  return activeList;
};

export default selectActiveListId;