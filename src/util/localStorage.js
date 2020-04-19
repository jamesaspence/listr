export const LISTS_STORAGE_KEY = 'lists';

export const getLocalStorage = () => window.localStorage;

export const getDataFromStorage = () => {
  return window.JSON.parse(getLocalStorage().getItem(LISTS_STORAGE_KEY));
};

export const writeDataToStorage = lists => {
  getLocalStorage().setItem(LISTS_STORAGE_KEY, window.JSON.stringify(lists));
};

export const clearData = () => {
  getLocalStorage().removeItem(LISTS_STORAGE_KEY);
};