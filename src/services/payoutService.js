import API from "./api";

export const fetchWalletData = async () => {
  const { data } = await API.get("/pyt/wallets/");
  return data;
};

export const deductAmount = async (id, payload) => {
  const { data } = await API.patch(`/pyt/wallet/${id}/deduct/`, payload);
  return data;
};

export const downloadWalletTransactionExcel = async () => {
  const { data } = await API.get("/pyt/transactions-excel/", {
    responseType: "blob",
  });
  return data;
};
