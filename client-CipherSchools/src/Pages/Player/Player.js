import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CommentBox from "./Comments/CommentBox";
import Comments from "./Comments/Comments";
import VideoDesc from "./VideoDesc";

const Player = () => {
  const video = useLoaderData();
  const [videoData, setVideoData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${video?.url}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setVideoData(data);
        setLoading(false);
      });
  }, [video?.url]);

  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div className="p-2 lg:py-10">
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
          <CommentBox video={video} />
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default Player;
