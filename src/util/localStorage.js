export const LISTS_STORAGE_KEY = 'lists';

export const getLocalStorage = () => window.localStorage;

export const getRawData = () => {
  return getLocalStorage().getItem(LISTS_STORAGE_KEY);
};

export const getDataFromStorage = () => {
  if (!hasStoredData()) {
    return null;
  }

  return window.JSON.parse(getRawData());
};

export const hasStoredData = () => {
  return getRawData() != null;
};

export const writeDataToStorage = lists => {
  getLocalStorage().setItem(LISTS_STORAGE_KEY, window.JSON.stringify(lists));
};

export const clearData = () => {
  getLocalStorage().removeItem(LISTS_STORAGE_KEY);
};