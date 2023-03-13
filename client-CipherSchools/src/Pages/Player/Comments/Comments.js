import React from "react";
import Comment from "./Comment";

const Comments = ({ comments }) => {
  return (
    <div className="border mt-5">
      {comments?.map((comment, i) => (
        <Comment key={i} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
