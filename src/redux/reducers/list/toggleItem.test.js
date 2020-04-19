import { DEFAULT_STATE } from './index';
import toggleItemReducer from './toggleItem';
import { toggleItem } from '../../actions/list';

const testListId = '1234';
const testItemId = '123123';
const testState = {
  ...DEFAULT_STATE,
  lists: {
    [testListId]: [
      {
        id: testItemId,
        text: 'apples',
        checked: false
      },
      {
        id: '43214321',
        text: 'oranges',
        checked: false
      }
    ]
  }
};

it('short circuits if list id is invalid', () => {
  expect(toggleItemReducer(
    testState,
    toggleItem('43214321', testItemId)
  )).toEqual(testState);
});

it('short circuits if item id is invalid', () => {
  expect(toggleItemReducer(
    testState,
    toggleItem(testListId, '99999')
  )).toEqual(testState);
});

it('toggles item state correctly', () => {
  let state = toggleItemReducer(
    testState,
    toggleItem(testListId, testItemId)
  );

  let item = state.lists[testListId].find(item => item.id === testItemId);
  expect(item).not.toBeNull();
  expect(item).not.toBeUndefined();
  expect(item.checked).toBeTruthy();

  state = toggleItemReducer(
    testState,
    toggleItem(testListId, testItemId)
  );


  item = state.lists[testListId].find(item => item.id === testItemId);
  expect(item).not.toBeNull();
  expect(item).not.toBeUndefined();
  expect(item.checked).toBeFalsy();
});