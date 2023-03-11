import React from "react";
import Comments from "../Home/Comments";
import Home from "../Home/Home";
import Player from "../Home/Player";

const HomeLayout = () => {
  return (
    <div className="my-5">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <Home />
        </div>
        <div>
          <Player />
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
