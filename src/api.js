import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-35-87-203-157.us-west-2.compute.amazonaws.com",
  headers: {
    'Content-Type': 'application/json'
  }
});

const getRepos = async () => {
  const response = await api.get("/api/repos/initial");
  console.log('response', response.data)
  return response.data;
};

const getOwnerRepos = async (owner) => {
  const response = await api.get(`/api/repos/${owner}`);
  return response.data;
};

export { getRepos, getOwnerRepos };
