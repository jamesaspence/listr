import { DEFAULT_STATE } from './index';
import deleteItemsReducer from './deleteItems';
import { ALL_ITEMS, CHECKED_ITEMS, deleteItems } from '../../actions/list';

const expectedListId = '123';
const TEST_STATE = {
  ...DEFAULT_STATE,
  lists: {
    [expectedListId]: [
      {
        id: '1111',
        text: 'apples',
        checked: false
      },
      {
        id: '2222',
        text: 'oranges',
        checked: true
      },
      {
        id: '3333',
        text: 'almonds',
        checked: false
      },
      {
        id: '4444',
        text: 'walnuts',
        checked: true,
      },
      {
        id: '5555',
        text: 'bananas',
        checked: true,
      }
    ]
  }
};

it('short circuits if list id is invalid', () => {
  expect(deleteItemsReducer(
    TEST_STATE,
    deleteItems('9999')
  )).toEqual(TEST_STATE);
});

it('deletes only checked items with criteria specified', () => {
  const expectedState = {
    ...TEST_STATE,
    lists: {
      ...TEST_STATE.lists,
      [expectedListId]: TEST_STATE.lists[expectedListId].filter(item => !item.checked)
    }
  };
  expect(deleteItemsReducer(
    TEST_STATE,
    deleteItems(expectedListId)
  )).toEqual(expectedState);
});

it('deletes everything when all items criteria specified', () => {
  const expectedState = {
    ...TEST_STATE,
    lists: {
      ...TEST_STATE.lists,
      [expectedListId]: []
    }
  };
  expect(deleteItemsReducer(
    TEST_STATE,
    deleteItems(expectedListId, ALL_ITEMS)
  )).toEqual(expectedState);
});