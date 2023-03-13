import { useQuery } from "@tanstack/react-query";
import React, { createContext, useEffect, useState } from "react";

export const APIContext = createContext();

const APIProvider = ({ children }) => {
  const [trends, setTrends] = useState([]);

  // get trending videos
  useEffect(() => {
    fetch(`${process.env.REACT_APP_PORT}/trending`)
      .then((res) => res.json())
      .then((data) => {
        setTrends(data);
      });
  }, []);

  // get most watched videos
  const { isLoading, data: videos } = useQuery({
    queryKey: ["videos"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_PORT}/videos`).then((res) => res.json()),
  });

  const value = { trends, videos, isLoading };
  return <APIContext.Provider value={value}>{children}</APIContext.Provider>;
};

export default APIProvider;
