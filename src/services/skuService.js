import API from "./api";

export const fetchSkuData = async () => {
  const { data } = await API.get("/sku/");
  return data;
};

export const submitSku = async (body) => {
  const { data } = await API.post("/sku/sku-submission/", body);
  return data;
};
