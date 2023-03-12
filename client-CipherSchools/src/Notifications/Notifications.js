import { useQuery } from "@tanstack/react-query";
import React from "react";

const Notifications = () => {
  const { data: notifications } = useQuery({
    queryKey: ["notifications"],
    queryFn: () =>
      fetch(`http://localhost:5000/notifications`).then((res) => res.json()),
  });
  return (
    <>
      {notifications.map((notify) => (
        <div className="border rounded-md my-3 p-4" key={notify._id} notify={notify}>A user post a new comment on <strong>{notify?.title}</strong> video</div>
      ))}
    </>
  );
};

export default Notifications;
