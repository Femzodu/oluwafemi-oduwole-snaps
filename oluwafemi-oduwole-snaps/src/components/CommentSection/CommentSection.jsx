import React from "react";
import "./CommentSection.scss";

const CommentSection = ({
  comments,
  newComment,
  setNewComment,
  handleFormSubmit,
}) => {
  return (
    <div className="comment__chat">
      <form className="comment__form" onSubmit={handleFormSubmit}>
        <div className="comment__input-container">
          <label className="comment__label">Name</label>
          <input
            className="comment__input-name"
            required
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
            className="comment__input-comment"
            required
            value={newComment.comment}
            onChange={(e) =>
              setNewComment({ ...newComment, comment: e.target.value })
            }
          />
        </div>
        <div className="comment__button-container">
          <button className="comment__button" type="submit">
            Submit
          </button>
        </div>
      </form>

      <div className="comment__comments">
        <div>{comments.length} Comments</div>
        {comments
          .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
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
