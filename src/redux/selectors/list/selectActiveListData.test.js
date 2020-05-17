import selectActiveListId from './selectActiveListId';
import selectActiveList from './selectActiveList';
import selectActiveListData from './selectActiveListData';

jest.mock('./selectActiveListId');
jest.mock('./selectActiveList');

beforeEach(() => {
  selectActiveListId.mockReset();
  selectActiveList.mockReset();
});

it('returns an object w/ values', () => {
  const expectedListId = 'testId';
  const expectedList = [
    {
      id: 1,
      text: 'item',
      checked: false
    }
  ];
  selectActiveListId.mockReturnValueOnce(expectedListId);
  selectActiveList.mockReturnValueOnce(expectedList);
  expect(selectActiveListData({})).toEqual({
    listId: expectedListId,
    items: expectedList
  });
  expect(selectActiveListId).toHaveBeenCalledTimes(1);
  expect(selectActiveList).toHaveBeenCalledTimes(1);
})