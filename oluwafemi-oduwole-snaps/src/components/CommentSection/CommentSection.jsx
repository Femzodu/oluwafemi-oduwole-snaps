import React from "react";

const CommentSection = ({
  comments,
  newComment,
  setNewComment,
  handleFormSubmit,
}) => {
  return (
    <div className="photo-details__chat">
      <form className="photo-details__form" onSubmit={handleFormSubmit}>
        <div className="photo-details__input-container">
          <label>Name</label>
          <input
            type="text"
            value={newComment.name}
            onChange={(e) =>
              setNewComment({ ...newComment, name: e.target.value })
            }
          />
        </div>

        <div className="photo-details__input-container">
          <label>Comment</label>
          <textarea
            value={newComment.comment}
            onChange={(e) =>
              setNewComment({ ...newComment, comment: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div className="photo-details__comments">
        <div>{comments.length} Comments</div>
        {comments.map((comment) => (
          <div key={comment.id} className="photo-details__comment">
            <div>
              <div>{comment.name}</div>
              <time dateTime={comment.timestamp}>
                {new Date(comment.timestamp).toLocaleDateString("en-US", {
                  month: "2-digit",
                  day: "2-digit",
                  year: "numeric",
                })}
              </time>
            </div>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
