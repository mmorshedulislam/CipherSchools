import React, { useContext } from "react";
import { APIContext } from "../../Contexts/APIProvider/APIProvider";

const Notifications = () => {
  const { notifications } = useContext(APIContext);

  return (
    <>
      {notifications?.map((notify, i) => (
        <div
          className="border rounded-md m-3 p-4"
          key={notify?._id}
          notify={notify}
        >
          {i + 1}. A user post a new comment on <strong>{notify?.title}</strong>{" "}
          video.
        </div>
      ))}
    </>
  );
};

export default Notifications;
