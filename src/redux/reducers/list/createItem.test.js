import { DEFAULT_STATE } from './index';
import createItemReducer from './createItem';
import { createItem } from '../../actions/list';
import { generateNewId } from '../../../util/id';

jest.mock('../../../util/id');

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

beforeEach(() => {
  generateNewId.mockReset();
});

it('short circuits if list id is invalid', () => {
  expect(createItemReducer(
    testState,
    createItem('43214321', 'oranges'))
  ).toEqual(testState);
  expect(generateNewId.mock.calls.length).toEqual(0);
});

it('creates a new item and adds to list', () => {
  const item = 'oranges';
  const expectedItemId = '123123';
  const expectedList = testState.lists[testListId].concat({
    id: expectedItemId,
    text: item,
    checked: false
  });
  generateNewId.mockReturnValueOnce(expectedItemId);

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