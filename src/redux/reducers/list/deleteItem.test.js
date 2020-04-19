import { DEFAULT_STATE } from './index';
import deleteItemReducer from './deleteItem';
import { deleteItem } from '../../actions/list';

const expectedListId = '123';
const expectedItemId = '123123';
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
        id: expectedItemId,
        text: 'oranges',
        checked: false
      },
      {
        id: '3333',
        text: 'almonds',
        checked: false
      }
    ]
  }
};

it('short circuits if list id is invalid', () => {
  expect(deleteItemReducer(
    TEST_STATE,
    deleteItem('9999', expectedItemId)
  )).toEqual(TEST_STATE);
});

it('short circuits if item id is invalid', () => {
  expect(deleteItemReducer(
    TEST_STATE,
    deleteItem(expectedListId, '9999')
  )).toEqual(TEST_STATE);
});

it('correctly deletes item', () => {
  const expectedState = {
    ...TEST_STATE,
    lists: {
      ...TEST_STATE.lists,
      [expectedListId]: TEST_STATE.lists[expectedListId].filter(item => item.id !== expectedItemId)
    }
  };
  expect(deleteItemReducer(
    TEST_STATE,
    deleteItem(expectedListId, expectedItemId)
  )).toEqual(expectedState);
});