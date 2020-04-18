export const LISTS_STORAGE_KEY = 'lists';

export const getLocalStorage = () => window.localStorage;

export const getLists = () => {
  return window.JSON.parse(getLocalStorage().getItem(LISTS_STORAGE_KEY));
};

export const writeListsToStorage = lists => {
  getLocalStorage().setItem(LISTS_STORAGE_KEY, window.JSON.stringify(lists));
};