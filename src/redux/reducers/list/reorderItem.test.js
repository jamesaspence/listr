import { DEFAULT_STATE } from './index';
import reorderItemReducer from './reorderItem';
import { reorderItem } from '../../actions/list';

const createItem = i => ({
  id: i,
  text: `item ${i}`,
  checked: false
});

const testListId = '1234';
const TEST_STATE = {
  ...DEFAULT_STATE,
  lists: {
    [testListId]: [
      createItem(0),
      createItem(1),
      createItem(2),
      createItem(3),
      createItem(4)
    ]
  }
};

it('does not reorder if the indices have not changed', () => {
  const actual = reorderItemReducer(
    TEST_STATE,
    reorderItem(testListId,1, 1)
    );
  expect(actual).toEqual(TEST_STATE);
});

it('does not reorder if list id is invalid', () => {
  const actual = reorderItemReducer(
    TEST_STATE,
    reorderItem(testListId,1, 1)
    );
  expect(actual).toEqual(TEST_STATE);
});

it('does not reorder if source index is invalid', () => {
  const actual = reorderItemReducer(
    TEST_STATE,
    reorderItem(testListId,1, 1)
    );
  expect(actual).toEqual(TEST_STATE);
});

it('does not reorder if destination index is invalid', () => {
  const actual = reorderItemReducer(
    TEST_STATE,
    reorderItem(testListId,1, 1)
    );
  expect(actual).toEqual(TEST_STATE);
});

it('reorders correctly', () => {
  const sourceIndex = 4;
  const destinationIndex = 1;
  const actual = reorderItemReducer(
    TEST_STATE,
    reorderItem(testListId, sourceIndex, destinationIndex)
  );
  const sortedItems = actual.lists[testListId];

  sortedItems.forEach((sortedItem, i) => {
    if (i < destinationIndex) {
      expect(sortedItem.id).toBe(i);
    } else if (i > destinationIndex) {
      expect(sortedItem.id).toBe(i - 1);
    } else {
      expect(sortedItem.id).toBe(sourceIndex);
    }
  });
});