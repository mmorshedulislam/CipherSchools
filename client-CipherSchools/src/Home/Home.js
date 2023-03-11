import React from "react";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 border p-10">
        {[...Array(6)].map((dv, i) => (
          <div className="border p-5">Video {i + 1}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
