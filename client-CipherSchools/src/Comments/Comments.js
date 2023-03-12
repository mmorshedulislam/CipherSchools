import { useQuery } from "@tanstack/react-query";
import React from "react";
import Comment from "./Comment";

const Comments = () => {
  const { data: comments } = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_PORT}/comments`).then((res) => res.json()),
  });
  return (
    <div className="border">
      {comments?.map((comment, i) => (
        <Comment key={i} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
