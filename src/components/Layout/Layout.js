import React from "react";
import Header from "./HeaderComponents/Header";

const Layout = ({ children }) => {
  return (
    <main className="min-h-screen font-montserrat flex flex-col justify-between overflow-x-hidden bg-primary-bg-color">
      <Header />
      {children}
    </main>
  );
};

export default Layout;
