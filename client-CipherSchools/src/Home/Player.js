import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { useLoaderData } from "react-router-dom";
import CommentBox from "../Comments/CommentBox";
import Comments from "../Comments/Comments";
import Share from "../Shared/Share";

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
          <div className="">
            <h2 className="my-1 text-xl">{video.title}</h2>
            <p className="flex justify-between items-center mr-3 dark:text-white my-3 wrap">
              <div className="flex justify-between items-center">
                <img
                  className="mr-2 w-8 h-8 rounded-full"
                  src={
                    "https://lh3.googleusercontent.com/a/AEdFTp4kVniDD3efIUzOFZ0845hXmkmfHLIMt0_y3Ip1=s96-c"
                  }
                  alt={"commentorName"}
                />
                <p className="text-black text-sm lg:text-md">{"Md Morshedul Islam"}</p>
              </div>
              <div className="flex justify-between items-center gap-x-2">
                <button>
                  <FcLike className="text-3xl" />
                </button>
                <button className="text-sm lg:text-md bg-gray-800 text-white px-3 py-1 lg:py-2 lg:px-4 rounded-full cursor-pointer">
                  Subscribe
                </button>
              </div>
            </p>
            <div className="flex gap-x-5">
              <p className="flex justify-between items-center gap-x-1">
                <BiTimeFive /> {video.duration} mins
              </p>
              <p className="flex justify-between items-center gap-x-1">
                <AiFillEye /> {video.views} views
              </p>
              <p className="flex justify-between items-center gap-x-1">
                <FcLike className="" />
                {11} likes
              </p>
            </div>
            <p className="text-justify mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab harum
              similique fugiat quam minus exercitationem optio odio et porro
              saepe voluptas nisi consectetur a ad dolorum quo, dolore quis
              commodi libero hic, quaerat aut. Cumque eius minima cum enim
              repudiandae error quia, necessitatibus nemo cupiditate soluta eos
              quisquam, voluptatem vel.
            </p>
            <p className="mt-5">Share with</p>
            <Share />
          </div>
        </div>
        <div className="">
          <CommentBox video={video} />
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default Player;
