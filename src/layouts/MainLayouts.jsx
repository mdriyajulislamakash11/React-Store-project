import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayouts = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* dynamic routes */}
      <div className="min-h-[calc(100vh-300px)]">
        {/* content */}
        
      </div>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayouts;
