import "./CommentSection.scss";
import { useState } from "react";

const CommentSection = ({
  comments,
  newComment,
  setNewComment,
  handleFormSubmit,
}) => {
  const [error, setError] = useState({ name: false, comment: false });
  const [submitMessage, setSubmitMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const clearMessage = () => {
    setTimeout(() => {
      setSubmitMessage("");
      setMessageType("");
    }, 5000);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: !newComment.name.trim(),
      comment: !newComment.comment.trim(),
    };

    setError(newErrors);

    if (newErrors.name || newErrors.comment) {
      setSubmitMessage("Please fill out all required fields");
      setMessageType("error");
      clearMessage();
      return;
    }

    try {
      await handleFormSubmit(e);
      setError({ name: false, comment: false });
      setSubmitMessage("Comment submitted successfully");
      setMessageType("success");
      clearMessage();
    } catch (error) {
      console.error(error);
      setSubmitMessage("Unable to submit comment. Please try again.");
      setMessageType("error");
      clearMessage();
    }
  };

  return (
    <div className="comment__chat">
      <form className="comment__form" onSubmit={onSubmit}>
        <div className="comment__input-container">
          <label className="comment__label">Name</label>
          <input
            className={`comment__input-name ${error.name ? "error" : ""}`}
            type="text"
            value={newComment.name}
            onChange={(e) =>
              setNewComment({ ...newComment, name: e.target.value })
            }
          />
        </div>

        <div className="comment__input-container">
          <label className="comment__label">Comment</label>
          <textarea
            className={`comment__input-comment ${error.comment ? "error" : ""}`}
            value={newComment.comment}
            onChange={(e) => {
              setNewComment({ ...newComment, comment: e.target.value });
              if (error.comment) {
                setError({ ...error, comment: false });
              }
            }}
          />
        </div>

        {submitMessage && (
          <div className={`comment__message ${messageType}`}>
            {submitMessage}
          </div>
        )}

        <div className="comment__button-container">
          <button className="comment__button" type="submit">
            Submit
          </button>
        </div>
      </form>

      <div className="comment__comments">
        <div>{comments.length} Comments</div>
        {comments
          .sort((a, b) => {
            const dateA = new Date(a.timestamp).getTime();
            const dateB = new Date(b.timestamp).getTime();
            return dateB - dateA;
          })

          .map((comment) => (
            <div key={comment.id} className="comment__comment">
              <hr className="comment__hr-line" />
              <div className="comment__namedate">
                <p className="comment__comment-name">{comment.name}</p>
                <time dateTime={comment.timestamp}>
                  {new Date(comment.timestamp).toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </time>
              </div>
              <p className="comment__user-comments">{comment.comment}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommentSection;
