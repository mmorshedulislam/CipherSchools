import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import Comment from "../Comments/Comment";

const Player = () => {
  const video = useLoaderData();
  return (
    <div className="p-10">
      <div className="grid lg:grid-cols-2 gap-10 my-5">
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
        </div>
        <div>
          <h2 className="my-1 text-xl">{video.title}</h2>
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
      </div>
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Player;
