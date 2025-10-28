import axios from "axios";

const api = axios.create({
  baseURL: "http://136.118.102.207",
  headers: {
    'Content-Type': 'application/json'
  }
});

const getRepos = async () => {
  const response = await api.get("/api/repos/initial");
  return response.data;
};

const getOwnerRepos = async (owner) => {
  const response = await api.get(`/api/repos/${owner}`);
  return response.data;
};

export { getRepos, getOwnerRepos };
