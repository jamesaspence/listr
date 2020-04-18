import { DEFAULT_STATE } from './index';
import toggleItemReducer from './toggleItem';
import { toggleItem } from '../../actions/list';

const testListId = '1234';
const testState = {
  ...DEFAULT_STATE,
  lists: {
    [testListId]: [
      {
        text: 'apples',
        checked: true
      },
      {
        text: 'oranges',
        checked: false
      }
    ]
  }
};

it('short circuits if list id is invalid', () => {
  expect(toggleItemReducer(
    testState,
    toggleItem('43214321', 0)
  )).toEqual(testState);
});

it('short circuits if provided index is invalid', () => {
  expect(toggleItemReducer(
    testState,
    toggleItem(testListId, 5)
  )).toEqual(testState);
});

it('toggles item state correctly', () => {
  let state = toggleItemReducer(
    testState,
    toggleItem(testListId, 1)
  );

  expect(state.lists[testListId][1].checked).toBeTruthy();

  state = toggleItemReducer(
    testState,
    toggleItem(testListId, 1)
  );

  expect(state.lists[testListId][1].checked).toBeFalsy();
});