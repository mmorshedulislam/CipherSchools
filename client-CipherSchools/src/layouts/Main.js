import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <h2 className="text-3xl text-center">Header</h2>
      <Outlet />
      <h2 className="text-3xl text-center">Footer</h2>
    </div>
  );
};

export default Main;
