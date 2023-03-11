import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";

const Main = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
