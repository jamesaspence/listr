import { writeDataToStorage } from '../../util/localStorage';
import createLocalStorageSubscriber from './localStorage';

jest.mock('../../util/localStorage');

const mockStore = {
  getState: jest.fn(),
  subscribe: jest.fn()
};

beforeEach(() => {
  writeDataToStorage.mockReset();
  mockStore.getState.mockReset();
  mockStore.subscribe.mockReset();

  mockStore.subscribe.mockImplementation(cb => cb);
});

it('subscribes the subscriber to the store', () => {
  createLocalStorageSubscriber(mockStore);

  expect(mockStore.subscribe).toHaveBeenCalledTimes(1);
});

it('writes data to local storage', () => {
  const listData = {
    activeList: 'list12345',
    lists: {
      list12345: []
    }
  };

  const state = {
    list: listData
  };
  mockStore.getState.mockReturnValue(state);

  const subscriber = createLocalStorageSubscriber(mockStore);
  subscriber();
  expect(writeDataToStorage).toHaveBeenCalledTimes(1);
  expect(writeDataToStorage).toHaveBeenCalledWith(listData);
});