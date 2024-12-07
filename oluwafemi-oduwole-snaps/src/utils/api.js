import axios from "axios";

const api_url = "https://unit-3-project-c5faaab51857.herokuapp.com";
const api_key = "fa357145-13ad-44a6-a344-6e999901551d";

const fetchTags = async () => {
  try {
    const response = await axios.get(`${api_url}/tags?api_key=${api_key}`);
    return response.data;
  } catch (error) {
    console.error("Unable to retrieve filters", error);
  }
};

const fetchPhotos = async () => {
  try {
    const response = await axios.get(`${api_url}/photos?api_key=${api_key}`);
    return response.data;
  } catch (error) {
    console.error("Unable to retrieve pictures", error);
  }
};

const fetchPhotoById = async (id) => {
  try {
    const response = await axios.get(
      `${api_url}/photos/${id}?api_key=${api_key}`
    );
    return response.data;
  } catch (error) {
    console.error("Unable to retrieve picture details", error);
  }
};

const fetchComments = async (id) => {
  try {
    const response = await axios.get(
      `${api_url}/photos/${id}/comments?api_key=${api_key}`
    );
    return response.data;
  } catch (error) {
    console.error("Unable to retrieve comments", error);
  }
};

const postComment = async (id, comment) => {
  try {
    const response = await axios.post(
      `${api_url}/photos/${id}/comments?api_key=${api_key}`,
      { name: comment.name, comment: comment.comment }
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
