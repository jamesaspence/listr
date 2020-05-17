import selectActiveList from './selectActiveList';
import selectActiveListId from './selectActiveListId';

const selectActiveListData = state => ({
  items: selectActiveList(state),
  listId: selectActiveListId(state)
});

export default selectActiveListData;