import { writeListsToStorage } from '../../util/localStorage';

const localStorageSubscriber = store => {
  const { list } = store.getState();
  writeListsToStorage(list);
};

const createLocalStorageSubscriber = store => {
  return store.subscribe(() => {
    localStorageSubscriber(store);
  });
};

export default createLocalStorageSubscriber;