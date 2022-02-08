import { api, convert, _prices } from ".";

export const handleGetPrices = async () => {
  const prices = await api.get(_prices);
  return prices.data;
};

export const handleConvertPrice = async ({ from, value }) => {
  if (!value) return { result: "" };
  const price = await api.get(convert(from, value));
  return price.data;
};
