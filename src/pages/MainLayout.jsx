import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../components/Menu/Menu";

const MainLayout = () => {
  return (
    <>
      <header>
        <Menu />
      </header>
      <Outlet />
    </>
  );
};

export default MainLayout;
