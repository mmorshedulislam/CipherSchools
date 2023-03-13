import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Video from "../Video/Video";

const Home = () => {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    fetch(`https://server-cipher-schools.vercel.app/trending`)
      .then((res) => res.json())
      .then((data) => {
        setTrends(data);
      });
  }, []);

  const {
    isLoading,
    refetch,
    data: videos,
  } = useQuery({
    queryKey: ["videos"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_PORT}/videos`).then((res) => res.json()),
  });

  if (isLoading) {
    <div>Loading...</div>
  }

  return (
    <div>
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
      <div className="my-5">
        <h2 className="font-semibold ml-2 text-2xl text-gray-800">Trending</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {trends?.map((video, i) => (
            <Video video={video} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
