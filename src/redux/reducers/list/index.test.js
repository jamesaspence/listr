import listReducer, { DEFAULT_STATE, getPreloadedState } from './';
import createItemReducer from './createItem';
import toggleItemReducer from './toggleItem';
import deleteItemReducer from './deleteItem';
import reorderItemReducer from './reorderItem';
import { createItem, deleteItem, toggleItem, reorderItem } from '../../actions/list';
import { clearData, getDataFromStorage, hasStoredData } from '../../../util/localStorage';
import { generateNewId } from '../../../util/id';

jest.mock('./createItem');
jest.mock('./toggleItem');
jest.mock('./deleteItem');
jest.mock('./reorderItem');
jest.mock('../../../util/localStorage');
jest.mock('../../../util/id');

const mockedReducers = [
  createItemReducer,
  toggleItemReducer,
  deleteItemReducer
];

const expectedGeneratedId = '123123';

beforeEach(() => {
  mockedReducers.forEach(indvMock => {
    indvMock.mockReset();
  });
  clearData.mockReset();
  getDataFromStorage.mockReset();
  hasStoredData.mockReset();
  generateNewId.mockReset();
  generateNewId.mockReturnValueOnce(expectedGeneratedId);
});

const expectOnlyThisReducerCalled = (mockedReducer, action) => {
  mockedReducers.forEach(indvMock => {
    if (mockedReducer === indvMock) {
      expect(indvMock.mock.calls.length).toEqual(1);
      expect(indvMock.mock.calls[0][1]).toEqual(action);
    } else {
      expect(indvMock.mock.calls.length).toEqual(0);
    }
  });
};

const expectGeneratedInitialState = state => {
  expect(state).toHaveProperty('lists');
  expect(state).toHaveProperty('activeList');

  const { lists, activeList } = state;
  expect(Object.keys(lists)).toHaveLength(1);
  expect(lists.hasOwnProperty(activeList)).toBeTruthy();
  expect(lists[activeList]).toHaveLength(0);
};

describe('getPreloadedState', () => {
  it('generates new state if no local storage', () => {
    hasStoredData.mockReturnValueOnce(false);

    const state = getPreloadedState();
    expectGeneratedInitialState(state);
  });

  it('generates new state if storage data is invalid', () => {
    hasStoredData.mockReturnValueOnce(true);
    getDataFromStorage.mockReturnValueOnce({
      foo: 'bar',
      stuff: 'things'
    });

    const state = getPreloadedState();
    expectGeneratedInitialState(state);
  });

  it('uses valid preloaded state', () => {
    const expectedState = {
      lists: {
        '123123': [
          {
            id: '321321',
            text: 'apples',
            checked: false
          }
        ]
      },
      activeList: '123123'
    };

    hasStoredData.mockReturnValueOnce(true);
    getDataFromStorage.mockReturnValueOnce(expectedState);
    const state = getPreloadedState();
    expect(state).toEqual(expectedState);
  });
});

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
    expectOnlyThisReducerCalled(createItemReducer, action);
  });

  it('handles toggle item correctly', () => {
    const action = toggleItem('1234', 0);
    listReducer(DEFAULT_STATE, action);
    expectOnlyThisReducerCalled(toggleItemReducer, action);
  });

  it('handles delete item correctly', () => {
    const action = deleteItem('1234', '123123');
    listReducer(DEFAULT_STATE, action);
    expectOnlyThisReducerCalled(deleteItemReducer, action);
  });

  it('handles reorder item correctly', () => {
    const source = { index: 1 };
    const destination = { index: 3 };
    const action = reorderItem('1234', '123123', source, destination);
    listReducer(DEFAULT_STATE, action);
    expectOnlyThisReducerCalled(reorderItemReducer, action);
  });
});