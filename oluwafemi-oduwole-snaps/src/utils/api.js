import axios from "axios";

const api_url = "https://unit-3-project-c5faaab51857.herokuapp.com";
const api_key = "fa357145-13ad-44a6-a344-6e999901551d";

const getApiURL = (endpoint) => {
  return `${api_url}${endpoint}?api_key=${api_key}`;
};

export const fetchTags = async () => {
  try {
    const response = await axios.get(`${api_url}/tags?api_key=${api_key}`);
    return response.data;
  } catch (error) {
    console.error("Unable to retrieve filters", error);
  }
};

export const fetchPhotos = async () => {
  try {
    const response = await axios.get(`${api_url}/photos?api_key=${api_key}`);
    return response.data;
  } catch (error) {
    console.error("Unable to retrieve images", error);
  }
};

export default { fetchTags, fetchPhotos };
