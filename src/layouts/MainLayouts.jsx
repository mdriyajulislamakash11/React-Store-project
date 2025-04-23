import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* dynamic routes */}
      <div className="min-h-[calc(100vh-300px)] container py-16 mx-auto">
        {/* content */}
        <Outlet />
      </div>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayouts;
