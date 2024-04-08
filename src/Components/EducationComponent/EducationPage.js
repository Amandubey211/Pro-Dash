import React, { useEffect } from "react";
import SideBar from "../DashBoardComponents/SideBar";
import Layout from "../../Layout/Layout";
import MainHeader from "../DashBoardComponents/MainHeader";
import { useSelector } from "react-redux";
import Navigation from "../ResuableComponent/Navigation";
import EducationModal from "./EducationModal";
import useGetAllEducation from "../../Hooks/CustomEducationHooks/useGetAllEducation";
import EducationCard from "./EducationCard.js";
import EmptyList from "../DashBoardComponents/EmptyList.js";

const EducationPage = () => {
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  const { fetchEducationData } = useGetAllEducation();

  const MyEducations = useSelector((store) => store.education.myEducations);
  useEffect(() => {
    fetchEducationData();
  }, []);

  return (
    <Layout
      title="My Education"
      keywords=" Education,Degree,Grade,Field, description, info,data,seo"
    >
      <div
        style={{ backgroundColor: currentPalette.secondary }}
        className="grid grid-cols-12 text-white min-h-svh"
      >
        <SideBar />
        <div className="col-span-11 lg:p-3 w-screen md:w-full  lg:w-full  ">
          <MainHeader />
          <div className="lg:p-3 p-1   w-full">
            <div className="flex justify-between items-center lg:px-12 px-1">
              <EducationModal title="Add  Education" type="create" />
              <Navigation size="4" />
            </div>
            <div className="p-2 flex w-full lg:gap-4 gap-3  my-3 items-center  flex-wrap   ">
              {MyEducations && MyEducations.length > 0 ? (
                MyEducations.slice()
                  .reverse()
                  .map((data, index) => (
                    <EducationCard key={index} data={data} />
                  ))
              ) : (
                <div className="flex justify-center h-56 w-full">
                  <EmptyList message="No Data found! Add Education Info" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EducationPage;
