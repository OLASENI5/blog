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
  parentId = null,
}) => {
  const isUserLoggined = Boolean(logginedUseId);
  const commentBelongsToUser = logginedUseId === comment.user.id;
  const isReplying =
    affectedComment &&
    affectedComment.type === "replying" &&
    affectedComment._id === Connect._id;
  const repliedCommentId = parentId ? parentId : comment._id;
  const replyOnUserId = comment.user._id;

  return (
    <div className="flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] p-3 rounded-lg">
      <img
        src={images[3]}
        alt="user profile"
        className="w-9 h-9 object-cover rounded-full"
      />
      <div className="flex-1 flex flex-col ">
        <h5 className="font-bold text-dark-hard tex-xs">{comment.user.name}</h5>
        <span className="text-xs text-dark-light">
          {new Date(comments.createdAt).toLocaleDateString("en-us", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
          })}
        </span>
        <p className="font-opensans mt-[10px] text-dark-light">
          {comment.desc}
        </p>
        <div className="flex items-center gap-x-3 text-dark-light font-roboto text-sm mt-3mb-3">
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
            <>
              <button className="flex items-center space-x-2">
                <FiEdit2 w-4 h-auto />
                <span>Edit</span>
              </button>
            </>
          )}

          <button className="flex items-center space-x-2">
            <FiTrash w-4 h-auto />
            <span>Delete</span>
          </button>
        </div>
        {isReplying && (
          <CommentForm
            btnLabel="reply"
            formSubmitHandler={(value) =>
              addComment(value, parentId, replyOnUserId)
            }
            formCancelHandler={() => setAffectedComment(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Comment;
