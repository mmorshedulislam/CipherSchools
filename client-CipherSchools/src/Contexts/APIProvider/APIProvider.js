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
  const {
    isLoading,
    refetch,
    data: videos,
  } = useQuery({
    queryKey: ["videos"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_PORT}/videos`).then((res) => res.json()),
  });

  // get notifications
  const { data: notifications } = useQuery({
    queryKey: ["notifications"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_PORT}/notifications`).then((res) =>
        res.json()
      ),
  });

  // get comments
  const { data: comments } = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_PORT}/comments`).then((res) => res.json()),
  });

  const value = { trends, videos, notifications, isLoading, comments, refetch };
  return <APIContext.Provider value={value}>{children}</APIContext.Provider>;
};

export default APIProvider;
