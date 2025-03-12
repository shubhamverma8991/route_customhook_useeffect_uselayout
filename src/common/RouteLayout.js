import React from "react";
import NavigationBar from "../components/NavigationBar";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <>
      <NavigationBar />
      <main>
        <Outlet /> {/* This is where the child routes will be rendered */}
      </main>
    </>
  );
}

export default RootLayout;
