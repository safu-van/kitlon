import API from "./api";

export const fetchSkuData = async () => {
  const { data } = await API.get("/sku/");
  return data;
};

export const saleSku = async (payload) => {
  const { data } = await API.patch("/sku/sku-sales/", payload);
  return data;
};

export const submitSku = async (payload) => {
  const { data } = await API.post("/sku/sku-submission/", payload);
  return data;
};

export const fetchSubmittedSku = async () => {
  const { data } = await API.get("/sku/sku-submission/");
  return data;
};

export const updateSubmittedSkuStatus = async (id, status) => {
  const { data } = await API.patch(`/sku/update-status/${id}/${status}/`);
  return data;
};

export const downloadSkuSubmissionExcel = async () => {
  const { data } = await API.get("/sku/sku-submission-excel/", {
    responseType: "blob",
  });
  return data;
};

export const createSku = async (payload) => {
  const { data } = await API.post("/sku/", payload);
  return data;
};

export const updateSku = async (id, payload) => {
  const { data } = await API.patch(`/sku/${id}/`, payload);
  return data;
};
