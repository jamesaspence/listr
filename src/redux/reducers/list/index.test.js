import listReducer, { DEFAULT_STATE } from './';
import createItemReducer from './createItem';
import toggleItemReducer from './toggleItem';
import { createItem, toggleItem } from '../../actions/list';

jest.mock('./createItem');
jest.mock('./toggleItem');

const mocks = [
  createItemReducer,
  toggleItemReducer
];

beforeEach(() => {
  mocks.forEach(indvMock => {
    indvMock.mockReset();
  });
});

const expectToBeCalledOnce = (mock, action) => {
  mocks.forEach(indvMock => {
    if (mock === indvMock) {
      expect(indvMock.mock.calls.length).toEqual(1);
      expect(indvMock.mock.calls[0][1]).toEqual(action);
    } else {
      expect(indvMock.mock.calls.length).toEqual(0);
    }
  });
};

describe('default props', () => {
  it('dispatches default state without state', () => {
    expect(listReducer(undefined, {})).toEqual(DEFAULT_STATE);
  });

  it('returns current state with random action', () => {
    expect(listReducer(DEFAULT_STATE, {})).toEqual(DEFAULT_STATE);
  });
});

describe('correct reducer dispatch', () => {
  it('handles create item correctly', () => {
    const action = createItem('1234', 'apples');
    listReducer(DEFAULT_STATE, action);
    expectToBeCalledOnce(createItemReducer, action);
  });

  it('handles toggle item correctly', () => {
    const action = toggleItem('1234', 0);
    listReducer(DEFAULT_STATE, action);
    expectToBeCalledOnce(toggleItemReducer, action);
  });
});