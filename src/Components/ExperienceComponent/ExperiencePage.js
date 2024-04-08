import React, { useEffect } from "react";
import Layout from "../../Layout/Layout";
import MainHeader from "../DashBoardComponents/MainHeader";
import SideBar from "../DashBoardComponents/SideBar";
import { useSelector } from "react-redux";
import Navigation from "../ResuableComponent/Navigation";
import ProfessionalInfoModal from "./ExperienceModal";
import useGetExperience from "../../Hooks/CustomExperienceHooks/useGetExperience";
import ExperienceCard from "./ExperienceCard";
import { Badge } from "@chakra-ui/react";
import EmptyList from "../DashBoardComponents/EmptyList";

const ExperiencePage = () => {
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  const { getExperience } = useGetExperience();
  const allExperience = useSelector((store) => store.experience.allExperience);

  useEffect(() => {
    getExperience();
  }, []);
  return (
    <Layout
      title="Experience  Page"
      keywords="Experience, compony, role, info,data,seo,"
    >
      <div
        style={{ backgroundColor: currentPalette.secondary }}
        className="grid grid-cols-12 text-white min-h-svh"
      >
        <SideBar />
        <div className="col-span-11 lg:p-3 w-screen md:w-full  lg:w-full  ">
          <MainHeader />
          <div className="lg:p-3 p-1   w-full">
            <div className="flex justify-between rounded-2xl items-center lg:px-12 px-1">
              <ProfessionalInfoModal type="create" />

              <Navigation size="4" />
            </div>
          </div>
          <span className="text-xs ps-6">
            {" "}
            Experiences ({allExperience?.length || 0})
          </span>
          <div className="lg:p-3 p-2 w-full flex flex-wrap gap-2 lg:gap-5 items-center justify-evenly">
            {allExperience.length === 0 ? (
              <EmptyList message="No Experience Found" />
            ) : (
              <>
                {" "}
                {allExperience
                  .slice()
                  .reverse()
                  .map((data) => {
                    return <ExperienceCard key={data._id} data={data} />;
                  })}
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExperiencePage;
