import React, { useContext } from "react";
import { APIContext } from "../../Contexts/APIProvider/APIProvider";
import Video from "./Video/Video";

const MostWatched = () => {
  const { videos } = useContext(APIContext);
  return (
    <div className="bg-gray-50  py-5">
      <h2 className="font-semibold ml-2 text-2xl text-gray-800">
        Most Watched
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {videos?.map((video, i) => (
          <Video video={video} key={i} />
        ))}
      </div>
    </div>
  );
};

export default MostWatched;
