const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItemData = (key) => {
  const item = localStorage.getItem(key);
  if (!item) {
    return null;
  }
  const data = JSON.parse(item);
  return data;
};

const hasItem = (key) => {
  const item = localStorage.getItem(key);
  if (!item) {
    return false;
  }
  return true;
};

const removeItem = (key) => {
  localStorage.removeItem(key);
};

const hasToken = (key) => {
  if (!getItemData(key)) {
    return false;
  }
  if (!getItemData(key).token) {
    return false;
  }
  return true;
};

const storage = {
  setItem,
  getItemData,
  hasItem,
  removeItem,
  hasToken,
};

export default storage;
