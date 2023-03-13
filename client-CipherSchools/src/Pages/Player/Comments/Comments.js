import React, { useContext } from "react";
import { APIContext } from "../../../Contexts/APIProvider/APIProvider";
import Comment from "./Comment";

const Comments = () => {
  const { comments } = useContext(APIContext);
  return (
    <div className="border mt-5">
      {comments?.map((comment, i) => (
        <Comment key={i} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
