import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import PhotoHeader from "../../components/PhotoHeader/PhotoHeader";
import PhotoImage from "../../components/PhotoImage/PhotoImage";
import CommentSection from "../../components/CommentSection/CommentSection";
import "./PhotoDetailsPage.scss";

const PhotoDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: "", comment: "" });
  const [error, setError] = useState(null);
  const [feedback, setFeedback] = useState(null);
  document.title = "Snaps - Photo Details Page";

  const validateForm = () => {
    if (!newComment.name.trim()) {
      setError("Name is required.");
      return false;
    }
    if (!newComment.comment.trim()) {
      setError("Comment is required.");
      return false;
    }
    setError(null);
    return true;
  };

  useEffect(() => {
    const loadPhotoDetails = async () => {
      try {
        const [photoData, commentData] = await Promise.all([
          api.fetchPhotoById(id),
          api.fetchComments(id),
        ]);
        setPhoto(photoData);
        setComments(commentData || []);
      } catch (error) {
        setError("Unable to load photo details and comments");
        console.error(error);
      }
    };

    loadPhotoDetails();
  }, [id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      await api.postComment(id, newComment);
      setNewComment({ name: "", comment: "" });
      const updatedComments = await api.fetchComments(id);
      setComments(updatedComments);
      setFeedback("Your comment was successfully posted");
    } catch (error) {
      setError("Unable to post comment");
      console.error(error);
    }
  };

  if (!photo) return null;

  return (
    <div className="photo-details">
      <PhotoHeader />
      <main className="photo-details__content">
        <PhotoImage photo={photo} />
        <CommentSection
          comments={comments}
          newComment={newComment}
          setNewComment={setNewComment}
          handleFormSubmit={handleFormSubmit}
        />
      </main>
    </div>
  );
};

export default PhotoDetails;
