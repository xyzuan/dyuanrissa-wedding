import React from "react";
import Footer from "./Footer";

function BaseLayout({ children }) {
  return (
    <>
      <div className="bg-dark-500 w-full">
        <div className="max-w-screen-2xl mx-auto">{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default BaseLayout;
