import axios from "axios";

export const api = axios.create({
  baseURL: "https://hotel-system-beige.vercel.app/",
});
