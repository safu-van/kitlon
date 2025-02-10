import API from "./api";

export const login = async (credentials) => {
  const { data } = await API.post("/acc/login/", credentials);
  return data;
};
