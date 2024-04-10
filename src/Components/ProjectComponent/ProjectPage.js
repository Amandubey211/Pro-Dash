import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import SideBar from "../DashBoardComponents/SideBar";
import MainHeader from "../DashBoardComponents/MainHeader";
import { useSelector } from "react-redux";
import Navigation from "../ResuableComponent/Navigation";
import ProjectModal from "./ProjectModal";
import useGetAllProject from "../../Hooks/CustomProjectHooks/useGetAllProjects";
import ProjectCard from "./ProjectCard";
import EmptyList from "../DashBoardComponents/EmptyList";
import { ProjectFilterLables } from "../../Data/ProjectData/FilteringData";
import toast from "react-hot-toast";

const ProjectPage = () => {
  const { getAllProject } = useGetAllProject();
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  const [activeFilter, setActiveFilter] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  const allProjectData = useSelector((store) => store.project.allProject);

  useEffect(() => {
    getAllProject();
  }, []);

  const handleFilter = (item) => {
    try {
      setActiveFilter(item?.label === activeFilter ? null : item.label);
      if (item.filterType === "All") {
        setFilteredData(null);
      } else if (item.filterType === "size") {
        const filtered = allProjectData.filter(
          (project) => project.size === item.label
        );
        setFilteredData(filtered);
      } else {
        const filtered =
          item.label === "completed"
            ? allProjectData.filter(
                (project) => project.progressPercentage === 100
              )
            : allProjectData.filter(
                (project) => project.progressPercentage < 100
              );
        setFilteredData(filtered);
      }
    } catch (error) {
      toast.error("Project Not Found", { position: "bottom-left" });
    }
  };

  return (
    <Layout
      title="Project Page"
      keywords="Project, project link, github link, role, timing info, Description, data, seo"
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
              <ProjectModal type="create" />
              <Navigation size="4" />
            </div>
            <div className="flex justify-center lg:justify-between md:justify-between p-3 lg:p-2 items-center">
              <div className="hidden lg:block md:block xl:block">
                My Projects ({allProjectData?.length || 0})
              </div>
              <div className="flex justify-center gap-1 items-center">
                {ProjectFilterLables.map((item) => (
                  <button
                    title={`filter :${item.label}`}
                    key={item.id}
                    onClick={() => handleFilter(item)}
                    className={`border hover:border-blue-500 rounded-md px-2 lg:px-3 p-1 text-xs font-light ${
                      item.label === activeFilter
                        ? "bg-blue-500 text-white font-semibold"
                        : ""
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-1">
              {!filteredData ? (
                <>
                  {!allProjectData?.length ? (
                    <div className="flex justify-center h-56 w-full">
                      <div className="flex gap-1 flex-col justify-center items-center">
                        <EmptyList message="No Data found! Add Project Info" />
                        <ProjectModal type="create" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-5 justify-center flex-wrap">
                      {allProjectData
                        ? [...allProjectData]
                            .reverse()
                            .map((data, i) => (
                              <ProjectCard key={i} data={data} />
                            ))
                        : null}
                    </div>
                  )}
                </>
              ) : (
                <>
                  {filteredData.length === 0 ? (
                    <div className="flex justify-center h-56 w-full">
                      <div className="flex gap-1 flex-col justify-center items-center">
                        <EmptyList message="No Data found! Add Project Info" />
                        <ProjectModal type="create" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-5 justify-center flex-wrap">
                      {filteredData.map((data, i) => (
                        <ProjectCard key={i} data={data} />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectPage;
