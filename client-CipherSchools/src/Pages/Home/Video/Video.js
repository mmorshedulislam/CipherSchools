import React from "react";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlinePlayCircle } from "react-icons/ai";

const Video = ({ video }) => {
  return (
    <div className="rounded-xl p-3 hover:bg-gray-100 p-5 transition duration-200">
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
          <img
            className="rounded-xl hover:scale-110 transition duration-300 ease-in-out"
            src={video?.thumb}
            alt=""
          />
          <AiOutlinePlayCircle className="text-4xl text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
        </div>
        <h2 className="my-2 text-md">{video.title.slice(0, 25)}...</h2>
      </Link>
      <p className="inline-flex items-center mr-3 text-sm dark:text-white">
        <img
          className="mr-2 w-8 h-8 rounded-full"
          src={
            "https://lh3.googleusercontent.com/a/AEdFTp4kVniDD3efIUzOFZ0845hXmkmfHLIMt0_y3Ip1=s96-c"
          }
          alt={"commentorName"}
        />
        <p className="text-black text-md">{"Md Morshedul Islam"}</p>
      </p>
      <div className="flex justify-between">
        <p className="flex justify-between items-center gap-x-1">
          <BiTimeFive /> {video.duration} mins
        </p>
        <p className="flex justify-between items-center gap-x-1">
          <AiFillEye /> {video.views} views
        </p>
      </div>
    </div>
  );
};

export default Video;
