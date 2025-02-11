import API from "./api";

export const fetchInventoryData = async () => {
  const { data } = await API.get("/ivt/inventory/");
  return data;
};

export const createInventory = async (payload) => {
  const { data } = await API.post("/ivt/inventory/", payload);
  return data;
};

export const updateInventory = async (id, payload) => {
  const { data } = await API.put(`/ivt/inventory/${id}/`, payload);
  return data;
};

export const updateInventoryStock = async (id, payload) => {
  const { data } = await API.patch(
    `/ivt/inventory/${id}/increment-stock/`,
    payload
  );
  return data;
};
