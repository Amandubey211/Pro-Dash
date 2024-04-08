import React, { useEffect } from "react";
import Layout from "../../Layout/Layout";
import SideBar from "../DashBoardComponents/SideBar";
import MainHeader from "../DashBoardComponents/MainHeader";
import { useSelector } from "react-redux";
import Navigation from "../ResuableComponent/Navigation";
import AwardModal from "./AwardModal";
import useGetAward from "../../Hooks/CustomAwardHooks/usGetAward";
import AwardCard from "./AwardCard";

const AwardPage = () => {
  const { getAllAward } = useGetAward();
  const allAwards = useSelector((store) => store.award.myAwards);
  useEffect(() => {
    getAllAward();
  }, []);
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  return (
    <Layout
      title="Achivement  Page"
      keywords="Achivements, role, certificates,grade, info,data,seo,"
    >
      <div
        style={{ backgroundColor: currentPalette.secondary }}
        className="grid grid-cols-12 text-white min-h-svh"
      >
        <SideBar />
        <div className="col-span-11 lg:p-3 w-screen md:w-full  lg:w-full  ">
          <MainHeader />
          <div className="lg:p-3 p-1   w-full">
            <div className="flex justify-between shadow-2xl rounded-2xl items-center lg:px-12 px-1">
              <AwardModal type="create" />
              <Navigation size="4" />
            </div>
            <div className="flex w-full  flex-wrap gap-3 justify-center items-center  p-4 ">
              {allAwards.map((data) => {
                return <AwardCard data={data} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AwardPage;
