import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  timeout: 7000,
  headers: { "Content-Type": "application/json" }
});

export async function fetchProjects() {
  const { data } = await api.get("/projects");
  return data;
}

export async function fetchAchievements() {
  const { data } = await api.get("/achievements");
  return data;
}

export async function sendContact(payload) {
  const { data } = await api.post("/contact", payload);
  return data;
}
