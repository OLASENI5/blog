import React from "react";
import { FiMessageSquare, FiEdit2, FiTrash } from "react-icons/fi";

import images from "../../constants/images";
import CommentForm from "./CommentForm";

const Comment = ({
  comment,
  logginedUseId,
  affectedComment,
  setAffectedComment,
  addComment,
  updateComment,
  deleteComment,
  replies,
}) => {
  const isUserLoggined = Boolean(logginedUseId);
  const commentBelongsToUser = logginedUseId === comment.user._id;
  const isReplying =
    affectedComment &&
    affectedComment.type === "replying" &&
    affectedComment._id === comment._id;
  const isEditing =
    affectedComment &&
    affectedComment.type === "editing" &&
    affectedComment._id === comment._id;

  return (
    <div className="flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] p-3 rounded-lg">
      <img
        src={images[3]}
        alt="user profile"
        className="w-9 h-9 object-cover rounded-full"
      />
      <div className="flex-1 flex flex-col ">
        <h5 className="font-bold text-dark-hard text-xs lg:text-sm">
          {comment.user.name}
        </h5>
        <span className="text-xs text-dark-light">
          {new Date(comment.createdAt).toLocaleDateString("en-us", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
          })}
        </span>
        {!isEditing && (
          <p className="font-opensans mt-[10px] text-dark-light">
            {comment.desc}
          </p>
        )}
        {isEditing && (
          <CommentForm
            btnLabel="update"
            formSubmitHandler={(value) => updateComment(value, comment._id)}
            formCancelHandler={() => setAffectedComment(null)}
            initialText={comment.desc}
          />
        )}
        <div className="flex items-center gap-x-3 text-dark-light font-roboto text-sm mt-3 mb-3">
          {isUserLoggined && (
            <button
              className="flex items-center space-x-2"
              onClick={() =>
                setAffectedComment({ type: "replying", _id: comment._id })
              }
            >
              <FiMessageSquare width="4" height="auto" />
              <span>Reply</span>
            </button>
          )}
          {commentBelongsToUser && (
            <button
              className="flex items-center space-x-2"
              onClick={() =>
                setAffectedComment({ type: "editing", _id: comment._id })
              }
            >
              <FiEdit2 width="4" height="auto" />
              <span>Edit</span>
            </button>
          )}
          <button
            className="flex items-center space-x-2"
            onClick={() => deleteComment(comment._id)}
          >
            <FiTrash width="4" height="auto" />
            <span>Delete</span>
          </button>
        </div>
        {isReplying && (
          <CommentForm
            btnLabel="reply"
            formSubmitHandler={(value) => addComment(value, null, comment.user._id)}
            formCancelHandler={() => setAffectedComment(null)}
          />
        )}
        {replies.length > 0 && (
          <div>
            {replies.map((reply) => (
              <Comment
                key={reply._id}
                addComment={addComment}
                affectedComment={affectedComment}
                setAffectedComment={setAffectedComment}
                comment={reply}
                deleteComment={deleteComment}
                logginedUseId={logginedUseId}
                replies={[]}
                updateComment={updateComment}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
