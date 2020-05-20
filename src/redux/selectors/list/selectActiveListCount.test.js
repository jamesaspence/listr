import selectActiveList from './selectActiveList';
import selectActiveListCount from './selectActiveListCount';

jest.mock('./selectActiveList');

beforeEach(() => {
  selectActiveList.mockReset();
});

it('returns 0 if active list is null', () => {
  selectActiveList.mockReturnValueOnce(null);
  expect(selectActiveListCount({})).toEqual(0);
});

it('returns correct size if active list is set', () => {
  const expectedList = [
    {
      id: '12345',
      text: 'Apples',
      checked: false
    },
    {
      id: '54321',
      text: 'Oranges',
      checked: false
    }
  ];
  const expectedLength = expectedList.length;
  selectActiveList.mockReturnValueOnce(expectedLength);
  expect(selectActiveListCount({})).toEqual(expectedLength);
});