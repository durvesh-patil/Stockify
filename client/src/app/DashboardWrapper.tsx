"use client";

import React, { useEffect } from "react";
import NavBar from "@/app/(components)/NavBar";
import SideBar from "./(components)/SideBar";
import StoreProvider, { useAppSelector } from "./redux";
import { current } from "tailwindcss/colors";
import { light } from "@mui/material/styles/createPalette";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  //use selector to get the state of the sidebar
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  //class needed to add in html tag to change the theme
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  });

  return (
    <div
      className={`${
        isDarkMode ? "dark" : "light"
      } flex bg-gray-50 text-gray-900 w-full min-h-screen`}
    >
      <SideBar />
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-200 ${
          isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
        }`}
      >
        <NavBar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
