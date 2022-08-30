const key = 'user';

const setItem = (value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItemData = () => {
  const item = localStorage.getItem(key);
  if (!item) {
    return null;
  }
  const data = JSON.parse(item);
  return data;
};

const removeItem = () => {
  localStorage.removeItem(key);
};

const hasToken = () => {
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
  removeItem,
  hasToken,
};

export default storage;
