import selectActiveListId from './selectActiveListId';

const activeList = 'list12345';
const listItems = [
  {
    id: 'item12345',
    name: 'Item 12345',
    checked: false
  }
];
const TEST_STATE = {
  list: {
    activeList,
    lists: {
      [activeList]: listItems
    }
  }
};

it('returns the first list id if active list is invalid', () => {
  const state = {
    ...TEST_STATE,
    list: {
      ...TEST_STATE.list,
      activeList: 'invalidActiveList'
    }
  };

  expect(selectActiveListId(state)).toBe(activeList);
});

it('returns the active list id', () => {
  expect(selectActiveListId(TEST_STATE)).toBe(activeList);
});