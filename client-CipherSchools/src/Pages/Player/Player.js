import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CommentBox from "./Comments/CommentBox";
import Comments from "./Comments/Comments";
import VideoDesc from "./VideoDesc";

const Player = () => {
  const video = useLoaderData();

  // get comments
  const {
    isLoading,
    refetch,
    data: comments,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_PORT}/comments`).then((res) => res.json()),
  });

  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div className="p-2 lg:py-5">
      <div className="grid lg:grid-cols-2 gap-10 my-5 bg-gray-100 p-2 lg:p-5 rounded-2xl">
        <div>
          <iframe
            width="100%"
            height="360px"
            src={`https://www.youtube.com/embed/${video?.url}`}
            title="The Breathtaking Beauty of Nature | HD"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <VideoDesc video={video} />
        </div>
        <div>
          <CommentBox video={video} refetch={refetch} />
          <Comments comments={comments} />
        </div>
      </div>
    </div>
  );
};

export default Player;
