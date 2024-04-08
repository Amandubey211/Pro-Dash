import React, { useEffect, useMemo } from "react";
import Layout from "../../Layout/Layout.js";
import SideBar from "./SideBar.js";
import MainSection from "./MainSection.js";
import { useSelector } from "react-redux";
import useGetTask from "../../Hooks/CustomTaskHooks/useGetTask.js";
import useGetUserPersonalInfo from "../../Hooks/CustomUserInfoHooks/useGetUserPersonalInfo.js";
import useGetProfileCompletness from "../../Hooks/CustomUserInfoHooks/useGetProfileCompletness.js";

const Dashboard = () => {
  const { getAllTask } = useGetTask();
  const { getPersonalInfo } = useGetUserPersonalInfo();
  const { getProfileCompletness } = useGetProfileCompletness();
  const { userId } = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getPersonalInfo();
    getAllTask();
    getProfileCompletness(userId);
  }, []);
  // const memoizedGetAllTask = useMemo(() => getAllTask, [getAllTask]);
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  return (
    <Layout title="Pro-Dash ">
      <div
        style={{ backgroundColor: currentPalette.secondary }}
        className="grid grid-cols-12 text-white min-h-svh"
      >
        <SideBar />
        <MainSection />
      </div>
    </Layout>
  );
};

export default Dashboard;
