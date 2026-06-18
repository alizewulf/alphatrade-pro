import axios from "axios";
import { API_BASE } from "@/shared/config/api";

export const apiClient = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
});
