import React, { useState } from "react";
import MainHeader from "./MainHeader.js";
import { useSelector } from "react-redux";

import ProfileCard from "./ProfileCard.js";
import ModalData, {
  MobileModalData,
} from "../../Data/DashboardData/DashboardModelData.js";
import DashboardModal from "./DashboardModal.js";
import EmptyList from "./EmptyList.js";
import TaskList from "./TaskList.js";
import { FilterLables } from "../../Data/DashboardData/FilteringData.js";
import Statstics from "./Statstics.js";
import toast from "react-hot-toast";

const MainSection = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  const AllTaskData = useSelector((state) => state.task.allTaskData);
  const DeleteLoading = useSelector((store) => store.task.isTaskDeleting);

  const handleFilter = (item) => {
    try {
      setActiveFilter(item?.label === activeFilter ? null : item.label);
      if (item.filterType === "All") {
        setFilteredData(null);
      } else if (item.filterType === "priority") {
        const filterData = AllTaskData.filter(
          (task) => task.taskPriority === item.label
        );
        setFilteredData(filterData);
      } else {
        if (item.label === "completed") {
          const filterData = AllTaskData.filter(
            (task) => task.progressPercentage === 100
          );
          setFilteredData(filterData);
        } else {
          const filterData = AllTaskData.filter(
            (task) => task.progressPercentage < 100
          );
          setFilteredData(filterData);
        }
      }
    } catch (error) {
      toast.error("Not Found", { position: "bottom-left" });
    }
  };

  return (
    <div className="lg:col-span-11 md:col-span-11  col-span-12  p-3  ">
      <MainHeader />
      <div className="grid gap-6 lg:p-4  lg:mt-1 mt-2 grid-cols-10   ">
        <div className="lg:col-span-7 md:col-span-7  col-span-10  mainsection   rounded-2xl  ">
          <ProfileCard />
          <div>
            <div className="hidden lg:block md:block xl:block">
              <div className="sub-topics flex justify-center items-center md:gap-1 lg:gap-2 lg:m-3 m-2 md:ps-2">
                {ModalData?.map((data) => (
                  <DashboardModal
                    key={data.id}
                    Title={data.ModalTitle}
                    Logo={data.ModalLogo}
                    Body={data.ModalBody}
                  />
                ))}
              </div>
            </div>
            <div className="block lg:hidden md:hidden xl:hidden">
              <div className="sub-topics flex justify-center items-center gap-2 lg:m-3 m-2">
                {MobileModalData?.map((data) => (
                  <DashboardModal
                    key={data.id}
                    Title={data.ModalTitle}
                    Logo={data.ModalLogo}
                    Body={data.ModalBody}
                  />
                ))}
              </div>
            </div>
            <div className="flex lg:justify-between justify-center lg:mt-1 md:mt-1 mt-2 mb-2 ">
              <h6 className="my-2 lg:text-sm text-xs hidden lg:block">
                My Task <b> ({AllTaskData?.length || 0})</b>
              </h6>
              <div className="flex gap-1 items-center justify-center">
                {FilterLables.map((item) => (
                  <button
                    title={`filter button ${item}`}
                    key={item.id}
                    onClick={() => handleFilter(item)}
                    className={`border hover:border-blue-500 rounded-md  lg:px-3 px-2 p-1 text-xs ${
                      item.label === activeFilter
                        ? "bg-blue-500 text-white"
                        : ""
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex  flex-col gap-2 lg:p-2 p-1 ">
              {!filteredData ? (
                <>
                  {!AllTaskData?.length ? (
                    <EmptyList message="No Task Found! Please Create One" />
                  ) : (
                    <>
                      {AllTaskData
                        ? [...AllTaskData]
                            .reverse()
                            .map((item, i) => (
                              <TaskList key={i} item={item} index={i} />
                            ))
                        : null}
                    </>
                  )}
                </>
              ) : (
                <>
                  {filteredData.length === 0 ? (
                    <div className=" flex  justify-center items-center p-5">
                      <EmptyList message="No Task Found!" />
                    </div>
                  ) : (
                    <>
                      {filteredData.map((item, i) => (
                        <TaskList
                          deleteLoading={DeleteLoading}
                          key={i}
                          item={item}
                          index={i}
                        />
                      ))}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: currentPalette.primary }}
          className="col-span-3  hidden lg:block md:block staticsection rounded-3xl "
        >
          <Statstics />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
