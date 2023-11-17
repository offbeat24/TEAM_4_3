/*global chrome*/
import axios from 'axios';
const baseURL = process.env.REACT_APP_URL;

const instanceUtil = axios.create({
  baseURL,
  headers: {
    "Content-Type" : "application/json",
  },
});

instanceUtil.interceptors.request.use(
  (config) => {
    chrome.storage.local.get('token', (result) => {
      if (result.token) {
        config.headers.Authorization = result.token;
      } else {
        window.open("https://www.ddngoorm.xyz/login", "_blank", "noopener,noreferrer");
      } return config;
    });
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getTeams = async () => {
  try {
    const response = await instanceUtil.get(`/teams`);

    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export const postCloud = async (data) => {
  try {
    const response = await instanceUtil.post(`/guest/clouds`, data);

    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};