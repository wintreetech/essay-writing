import React, { useEffect } from "react";
import { Navbar, Footer } from "../components";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Layout() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
