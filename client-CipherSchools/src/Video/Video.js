import React from "react";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

const Video = ({ video }) => {
  return (
    <div className="border p-3">
      <iframe
        className="hidden"
        width="100%"
        height="270px"
        src={`https://www.youtube.com/embed/${video?.url}`}
        title="The Breathtaking Beauty of Nature | HD"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <Link to={`/player/${video?.id}`}>
        <img src={video?.thumb} alt="" />{" "}
        <h2 className="my-1 text-xl">{video.title.slice(0, 25)}...</h2>
      </Link>
      <div className="flex justify-between">
        <p className="flex justify-between items-center gap-x-1">
          <BiTimeFive /> {video.duration} mins
        </p>
        <p className="flex justify-between items-center gap-x-1">
          <AiFillEye /> {video.views} views
        </p>
      </div>
      <p className="text-justify">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
        recusandae voluptate corrupti?
      </p>
    </div>
  );
};

export default Video;
