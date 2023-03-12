import React from "react";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlinePlayCircle } from "react-icons/ai"; 

const Video = ({ video }) => {
  return (
    <div className="border rounded-xl p-3">
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
      <Link to={`/player/${video?._id}`}>
        <div className="relative">
          <img className="rounded-xl" src={video?.thumb} alt="" />
          <AiOutlinePlayCircle className="text-4xl text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"/>
        </div>
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
