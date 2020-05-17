import selectActiveList from './selectActiveList';
import selectActiveListId from './selectActiveListId';

//TODO write unit tests
const selectActiveListData = state => ({
  items: selectActiveList(state),
  listId: selectActiveListId(state)
});

export default selectActiveListData;