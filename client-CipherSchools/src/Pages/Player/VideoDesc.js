import React, { useState } from "react";
import Share from "../../Shared/Share";
import { AiFillEye } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { toast } from "react-hot-toast";

const VideoDesc = ({ video }) => {
  const [newLikes, setNewLikes] = useState(video?.likes);
  const addToLike = () => {
    fetch(`${process.env.REACT_APP_PORT}/addtolike/${video?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ likes: video?.likes }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Liked!");
          setNewLikes(newLikes + 1);
        }
      });
  };

  return (
    <div className="">
      <h2 className="my-1 text-xl">{video?.title}</h2>
      <p className="flex justify-between items-center mr-3 dark:text-white my-3 wrap">
        <div className="flex justify-between items-center">
          <img
            className="mr-2 w-8 h-8 rounded-full"
            src={
              "https://lh3.googleusercontent.com/a/AEdFTp4kVniDD3efIUzOFZ0845hXmkmfHLIMt0_y3Ip1=s96-c"
            }
            alt={"commentorName"}
          />
          <p className="text-black text-sm lg:text-md">
            {"Md Morshedul Islam"}
          </p>
        </div>
        <div className="flex justify-between items-center gap-x-2">
          <button onClick={addToLike}>
            <FcLike className="text-3xl" />
          </button>
          <button className="text-sm lg:text-md bg-gray-800 text-white px-3 py-1 lg:py-2 lg:px-4 rounded-full cursor-pointer">
            Subscribe
          </button>
        </div>
      </p>
      <div className="flex gap-x-5">
        <p className="flex justify-between items-center gap-x-1">
          <BiTimeFive /> {video?.duration} mins
        </p>
        <p className="flex justify-between items-center gap-x-1">
          <AiFillEye /> {video?.views} views
        </p>
        <p className="flex justify-between items-center gap-x-1">
          <FcLike className="" />
          {newLikes ? newLikes : 0} likes
        </p>
      </div>
      <p className="text-justify mt-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab harum
        similique fugiat quam minus exercitationem optio odio et porro saepe
        voluptas nisi consectetur a ad dolorum quo, dolore quis commodi libero
        hic, quaerat aut. Cumque eius minima cum enim repudiandae error quia,
        necessitatibus nemo cupiditate soluta eos quisquam, voluptatem vel.
      </p>
      <p className="mt-5">Share with</p>
      <Share />
    </div>
  );
};

export default VideoDesc;
