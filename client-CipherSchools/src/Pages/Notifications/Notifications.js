import { useQuery } from "@tanstack/react-query";
import React from "react";

const Notifications = () => {
  // get notifications
  const { data: notifications } = useQuery({
    queryKey: ["notifications"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_PORT}/notifications`).then((res) =>
        res.json()
      ),
  });

  return (
    <>
      {notifications?.map((notify, i) => (
        <div
          className="border rounded-md m-3 p-4"
          key={notify?._id}
          notify={notify}
        >
          {i + 1}. Someone post a new comment on{" "}
          <strong>{notify?.title}</strong> video.
        </div>
      ))}
    </>
  );
};

export default Notifications;
