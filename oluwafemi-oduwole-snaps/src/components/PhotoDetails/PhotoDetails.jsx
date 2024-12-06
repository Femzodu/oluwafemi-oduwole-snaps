import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../utils/api";
import "./photodetails.scss";

const PhotoDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: "", comment: "" });
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPhotoDetails = async () => {
      try {
        const photo = await api.fetchPhotoById(id);
        setPhoto(photo);
      } catch (error) {
        setError("Unable to retrieve photo details");
        console.error(error);
      }
    };

    loadPhotoDetails();
  }, [id]);

  useEffect(() => {
    const loadComments = async () => {
      try {
        const commentData = await api.fetchComments(id);
        setComments(commentData);
      } catch (error) {
        setError("Unable to retrieve comments");
        console.error(error);
      }
    };

    loadComments();
  }, [id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.postComment(id, newComment);
      setNewComment({ name: "", comment: "" });
      const updatedComments = await api.fetchComments(id);
      setComments(updatedComments);
    } catch (error) {
      setError("Unable to post comment");
      console.error(error);
    }
  };

  if (!photo) return null;

  return (
    <div className="photo-details">
      <header className="photo-details__header">
        <Link to="/" className="brand">
          Snaps
        </Link>
        <Link to="/" className="photo-details__home">
          <svg
            className="photo-details__home--button"
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.292892 6.7929C-0.0976315 7.18342 -0.0976314 7.81658 0.292893 8.20711L6.65686 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84315C8.46159 1.45262 8.46159 0.819458 8.07107 0.428933C7.68054 0.038409 7.04738 0.038409 6.65685 0.428933L0.292892 6.7929ZM21 6.5L1 6.5L1 8.5L21 8.5L21 6.5Z"
              fill="#1E6655"
            />
          </svg>
          Home
        </Link>
      </header>

      <main className="photo-details__content">
        <img
          src={photo.photo}
          alt={photo.photoDescription}
          className="photo-details__image"
        />

        <div className="photo-details__info">
          <div className="photo-details__tags">
            {photo.tags.map((tag) => (
              <div key={tag} className="photo-details__tag">
                {tag}
              </div>
            ))}
          </div>
          <div className="photo-details__info">
            <div>{photo.likes} likes</div>
            <time dateTime={photo.timestamp}>
              {/* {new Date(photo.timestamp).toLocaleDateString("", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              })} */}
            </time>
          </div>
          <div>Photo by {photo.photographer}</div>
        </div>
      </main>
    </div>
  );
};

export default PhotoDetails;
