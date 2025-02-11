import API from "./api";

export const fetchInventoryData = async () => {
  const { data } = await API.get("/ivt/inventory/");
  return data;
};
