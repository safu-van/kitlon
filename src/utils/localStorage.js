export const setItem = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log("local Storage setItem error :", error);
  }
};

export const getItem = (key) => {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : undefined;
  } catch (error) {
    console.log("local Storage getItem error :", error);
  }
};

export const clearStorage = () => {
  try {
    window.localStorage.clear();
  } catch (error) {
    console.error("localStorage clear error:", error);
  }
};

export const setAccessToken = (newAccessToken) => {
  let userData = getItem("userData");

  if (userData) {
    userData.access_token = newAccessToken;
    setItem("userData", userData);
  }
};

export const getUserDataDetails = (key) => {
  let userData = getItem("userData");

  if (userData) {
    return userData[key];
  }
};
