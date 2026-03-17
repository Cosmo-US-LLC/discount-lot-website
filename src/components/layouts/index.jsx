import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./layout.css";

function Layout() {
  return (
    <>
      <Header />
      <div className="dl-layout__content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
