import React, { useEffect, useState } from "react";
import Video from "../Video/Video";

const Home = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(`https://server-cipher-schools.vercel.app/videos`)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
      });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {videos.map((video, i) => (
          <Video video={video} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Home;
