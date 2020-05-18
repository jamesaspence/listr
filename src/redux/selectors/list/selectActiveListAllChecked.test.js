import selectActiveList from './selectActiveList';
import selectActiveListAllChecked from './selectActiveListAllChecked';
import { listAllChecked } from '../../../util/list';

jest.mock('./selectActiveList');
jest.mock('../../../util/list');

const activeList = 'list12345';
const createMockState = items => ({
  list: {
    activeList,
    lists: {
      [activeList]: items
    }
  }
});

const createMockItem = checked => ({
  id: 'item12345',
  name: 'Test item',
  checked
});

beforeEach(() => {
  selectActiveList.mockReset();
  listAllChecked.mockReset();
});

it('returns false if active list invalid', () => {
  selectActiveList.mockReturnValueOnce(null);
  const state = createMockState([
    createMockItem(true),
    createMockItem(true),
    createMockItem(true),
  ]);
  expect(selectActiveListAllChecked(state)).toBeFalsy();
});

it('returns false if list is empty', () => {
  const items = [];
  selectActiveList.mockReturnValueOnce(items);
  const state = createMockState(items);
  expect(selectActiveListAllChecked(state)).toBeFalsy();
});

it('calls util method correctly', () => {
  const items = [
    createMockItem(true),
    createMockItem(true),
    createMockItem(false)
  ];
  selectActiveList.mockReturnValueOnce(items);
  const state = createMockState(items);
  selectActiveListAllChecked(state);
  expect(listAllChecked).toHaveBeenCalledTimes(1);
  expect(listAllChecked).toHaveBeenCalledWith(items);
});