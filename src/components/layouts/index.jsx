import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./layout.css";

function Layout() {
  return (
    <div className="dl-layout">
      <Header />
      <main className="dl-layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
