import { writeDataToStorage } from '../../util/localStorage';

const localStorageSubscriber = store => {
  const { list } = store.getState();
  writeDataToStorage(list);
};

const createLocalStorageSubscriber = store => {
  return store.subscribe(() => {
    localStorageSubscriber(store);
  });
};

export default createLocalStorageSubscriber;