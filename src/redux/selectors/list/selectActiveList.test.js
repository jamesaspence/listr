import selectActiveListId from './selectActiveListId';
import selectActiveList from './selectActiveList';

jest.mock('./selectActiveListId');

beforeEach(() => {
  selectActiveListId.mockReset();
});

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

it('returns null if active list is invalid', () => {
  selectActiveListId.mockReturnValueOnce('invalidListId');
  expect(selectActiveList(TEST_STATE)).toBeNull();
});

it('returns correct list if active list is valid', () => {
  selectActiveListId.mockReturnValueOnce(activeList);
  expect(selectActiveList(TEST_STATE)).toEqual(listItems);
});