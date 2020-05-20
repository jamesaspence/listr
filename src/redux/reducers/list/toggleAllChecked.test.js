import toggleAllCheckedReducer from './toggleAllChecked';
import { toggleAllChecked } from '../../actions/list';
import { listExists, listAllChecked } from '../../../util/list';

jest.mock('../../../util/list');

const testListId = '1234';
const createMockState = items => ({
  activeList: testListId,
  lists: {
    [testListId]: items
  }
});

const createMockItem = checked => ({
  id: 'item12345',
  name: 'Test item',
  checked
});

const assertCheckStatus = (items, expectedCheck) => {
  items.forEach(indvItem => {
    expect(indvItem.checked).toBe(expectedCheck);
  });
};

beforeEach(() => {
  listExists.mockReset();
  listAllChecked.mockReset();
});

it('does not toggle if list id is invalid', () => {
  listExists.mockReturnValueOnce(false);
  const state = createMockState([
    createMockItem(true),
    createMockItem(false),
    createMockItem(true),
    createMockItem(false)
  ]);

  expect(toggleAllCheckedReducer(state, toggleAllChecked('invalidList'))).toEqual(state);
});

it('toggles true to false', () => {
  listExists.mockReturnValue(true);
  listAllChecked.mockReturnValueOnce(true);
  const state = createMockState([
    createMockItem(true),
    createMockItem(true),
    createMockItem(true),
    createMockItem(true)
  ]);
  const actual = toggleAllCheckedReducer(state, toggleAllChecked(testListId));
  assertCheckStatus(actual.lists[testListId], false);
});

it('toggles false to true', () => {
  listExists.mockReturnValue(true);
  listAllChecked.mockReturnValueOnce(false);
  const state = createMockState([
    createMockItem(false),
    createMockItem(false),
    createMockItem(false),
    createMockItem(false)
  ]);
  const actual = toggleAllCheckedReducer(state, toggleAllChecked(testListId));
  assertCheckStatus(actual.lists[testListId], true);
});

it('toggles mixed values to true', () => {
  listExists.mockReturnValue(true);
  listAllChecked.mockReturnValueOnce(false);
  const state = createMockState([
    createMockItem(false),
    createMockItem(true),
    createMockItem(true),
    createMockItem(false),
    createMockItem(true)
  ]);
  const actual = toggleAllCheckedReducer(state, toggleAllChecked(testListId));
  assertCheckStatus(actual.lists[testListId], true);
});