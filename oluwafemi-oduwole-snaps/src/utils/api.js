import axios from "axios";

const api_url = "";
const api_key = "";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
const VITE_PORT = import.meta.env.VITE_PORT;

const fetchTags = async () => {
  try {
    const response = await axios.get(`${VITE_BASE_URL}${VITE_PORT}/tags`);
    return response.data;
  } catch (error) {
    console.error("Unable to retrieve filters", error);
  }
};

const fetchPhotos = async () => {
  try {
    const response = await axios.get(`${VITE_BASE_URL}${VITE_PORT}/photos`);
    return response.data;
  } catch (error) {
    console.error("Unable to retrieve pictures", error);
  }
};

const fetchPhotoById = async (id) => {
  try {
    const response = await axios.get(
      `${VITE_BASE_URL}${VITE_PORT}/photos/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Unable to retrieve picture details", error);
  }
};

const fetchComments = async (id) => {
  try {
    const response = await axios.get(
      `${VITE_BASE_URL}${VITE_PORT}/comments/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Unable to retrieve comments", error);
  }
};

const postComment = async (id, comment) => {
  try {
    const response = await axios.post(
      `${VITE_BASE_URL}${VITE_PORT}/comments/${id}`,
      {
        name: comment.name,
        comment: comment.comment,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Unable to submit comment", error);
  }
};

export default {
  fetchTags,
  fetchPhotos,
  fetchPhotoById,
  fetchComments,
  postComment,
};
