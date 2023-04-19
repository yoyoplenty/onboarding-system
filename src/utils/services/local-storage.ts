export const setLocalStorage = (item, data) => {
  localStorage.setItem(item, JSON.stringify(data));
};

export const removeLocalStroage = (item) => {
  localStorage.removeItem(item);
};

export const getLocalStorage = (item) => {
  return JSON.parse(localStorage.getItem(item));
};
