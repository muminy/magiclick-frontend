import axios from "axios";

export const baseURL = "https://api.exchangerate.host";
export const _prices =
  "/latest?symbols=USD,EUR,JPY,GBP,DKK,NOK&places=4&base=TRY";
export const convert = (from, value) =>
  `/convert?from=${from}&to=TRY&amount=${value}`;

export const api = axios.create({
  baseURL,
});
