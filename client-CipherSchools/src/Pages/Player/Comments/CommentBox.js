import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { APIContext } from "../../../Contexts/APIProvider/APIProvider";

const CommentBox = ({ video }) => {
  const { refetch } = useContext(APIContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    console.log(comment);

    const commentData = {
      comment,
    };

    fetch(`${process.env.REACT_APP_PORT}/addcomment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          refetch();
          toast.success("Comment Submitted");
        }
      });

    fetch(`${process.env.REACT_APP_PORT}/newnotification`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(video),
    })
      .then((res) => res.json())
      .then((data) => data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          name="comment"
          id=""
          className="w-full h-32 py-3 px-5 rounded-md block mb-3 border"
          placeholder="Write Your Comment..."
        ></textarea>
        <input
          className="bg-gray-800 text-white px-4 py-2 rounded-sm cursor-pointer"
          type="submit"
          value={"Comment"}
        />
      </form>
    </div>
  );
};

export default CommentBox;
