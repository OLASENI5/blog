import React, { useEffect, useState } from "react";

import { getCommentsData } from "../../data/comments";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

const CommentsContainer = ({ className, logginedUseId }) => {
  const [comments, setComments] = useState([]);
  const mainComments = comments.filter((comment) => comment.parent === null);
  const [affectedComment, setAffectedComment] = useState(null);

  useEffect(() => {
    (async () => {
      const commentData = await getCommentsData();
      setComments(commentData);
    })();
  }, []);

  const addCommentHandler = (value, parent = null, replyOnUser = null) => {
    const newComment = {
      _id: "10",
      user: {
        _id: "a",
        name: "Mohammed Rezial",
      },
      desc: value,
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: "2022-12-31T17:22:05.092+0000",
    };

    setComments((curState) => {
      return [newComment, ...curState];
    });
  };

  return (
    <div className={`${className}`}>
      <CommentForm
        btnLabel="Send"
        formSubmitHandler={(value) => addCommentHandler(value)}
      />
      <div className="space-y-4 mt-8">
        {mainComments.map((comments) => {
          <Comment
          key={comment._id}
            comment={comment}
            logginedUseId={logginedUseId}
            affectedComment={affectedComment}
            setAffectedComment={setAffectedComment}
            addComment={addComment}
          />;
        })}
      </div>
    </div>
  );
};

export default CommentsContainer;
