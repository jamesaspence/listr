import { DEFAULT_STATE } from './index';
import createItemReducer from './createItem';
import { createItem } from '../../actions/list';

const testListId = '1234';
const testState = {
  ...DEFAULT_STATE,
  lists: {
    [testListId]: [
      {
        text: 'apples',
        checked: true
      }
    ]
  }
};

it('short circuits if list id is invalid', () => {
  expect(createItemReducer(
    testState,
    createItem('43214321', 'oranges'))
  ).toEqual(testState);
});

it('creates a new item and adds to list', () => {
  const item = 'oranges';
  const expectedList = testState.lists[testListId].concat({
    text: item,
    checked: false
  });

  expect(createItemReducer(
    testState,
    createItem(testListId, item))
  ).toEqual({
    ...testState,
    lists: {
      [testListId]: expectedList
    }
  });
});