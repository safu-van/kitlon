import API from "./api";

export const fetchLabourData = async () => {
  const { data } = await API.get("/acc/labour/");
  return data;
};

export const createLabour = async (payload) => {
  const { data } = await API.post("/acc/labour/", payload);
  return data;
};

export const updateLabour = async (id, payload) => {
  const { data } = await API.patch(`/acc/labour/${id}/`, payload);
  return data;
};

export const updateLabourStatus = async (id) => {
  const { data } = await API.patch(`/acc/labour/${id}/block-unblock/`);
  return data;
};
