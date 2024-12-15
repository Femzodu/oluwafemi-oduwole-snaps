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
<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes

  useEffect(() => {
    const loadPhotoDetails = async () => {
      try {
<<<<<<< Updated upstream
        const photo = await api.fetchPhotoById(id);
        setPhoto(photo);
      } catch (error) {
        setError("Unable to retrieve photo details");
=======
        const [photoData, commentData] = await Promise.all([
          api.fetchPhotoById(id),
          api.fetchComments(id),
        ]);
        setPhoto(photoData);
        setComments(commentData || []);
      } catch (error) {
        setError("Unable to load photo details and comments");
>>>>>>> Stashed changes
        console.error(error);
      }
    };

    loadPhotoDetails();
  }, [id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCommentResponse = await api.postComment(id, newComment);
      setNewComment({ name: "", comment: "" });
      const updatedComments = [newCommentResponse];
      comments.forEach((comment) => updatedComments.push(comment));
      setComments(updatedComments);
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
