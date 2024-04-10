import {
  Badge,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Progress,
  Spinner,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import DashboardModal from "./DashboardModal";
import { MdDeleteOutline } from "react-icons/md";
import { FaCopy, FaRegCopy } from "react-icons/fa";
import { FcHighPriority, FcOk } from "react-icons/fc";
import toast from "react-hot-toast";
import useDeleteTask from "../../Hooks/CustomTaskHooks/useDeleteTask";

const TaskList = ({ item, index, deleteLoading }) => {
  const [copied, setCopied] = useState(false);
  const date = new Date(item.dueDate);
  const formattedDate = date.toLocaleString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  const { deletTask } = useDeleteTask();
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  const handleDelete = () => {
    deletTask(item._id);
  };
  const handleCopy = () => {
    setCopied(true);
    const textToCopy = `Title: ${item.title},Description: ${item.description}`;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast.success("Task Copied", { position: "bottom-left" });
        const timeoutId = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(timeoutId);
      })
      .catch((error) => {
        console.error("Failed to copy text:", error);
      });
  };

  return (
    // <div className="flex justify-center items-center ">
    <div
      key={item._id}
      className="grid rounded-md p-1 h-30  px-2 shadow-lg grid-cols-10"
      style={{ backgroundColor: currentPalette.primary }}
    >
      <div className="lg:col-span-1 md:col-span-1 col-span-2">
        <div
          className={`flex flex-col gap-1 h-full justify-center p-2 items-center `}
        >
          <CircularProgress
            title="Progress-percentage"
            value={item.progressPercentage}
            size={{ base: "3.5rem", md: "4rem", lg: "4.2rem", sm: "3rem" }}
            color="green.400"
          >
            <CircularProgressLabel>
              {item.progressPercentage}%
            </CircularProgressLabel>
          </CircularProgress>
          <div className="block  ms-2 lg:hidden md:hidden">
            <Badge
              fontSize="xx-small"
              textTransform="capitalize"
              colorScheme={
                item.taskPriority === "medium"
                  ? "yellow"
                  : item.taskPriority === "high"
                  ? "red"
                  : "green"
              }
            >
              {item.taskPriority === "medium"
                ? "Mid Priority"
                : item.taskPriority === "high"
                ? "High Priority"
                : "Low Priority"}
            </Badge>
          </div>
        </div>
      </div>
      <div className=" lg:col-span-7 md:col-span-6  col-span-7  lg:px-3 px-1 ">
        <div className="flex gap-1  justify-center p-2 flex-col">
          <div className="flex gap-2 justify-between items-center ">
            <div className="flex gap-2 items-center">
              <b className="lg:text-lg  text-md">{index + 1}.</b>
              <div className=" rounded-lg flex gap-1 items-center justify-between lg:text-lg  text-sm capitalize font-semibold ">
                {item.title}
                {item.progressPercentage === 100 ? (
                  <FcOk />
                ) : (
                  <FcHighPriority />
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1   justify-start">
            <div className="text-xs min-h-6 lg:p-1 font-light capitalize">
              {item.description}
            </div>

            <div className="block lg:hidden md:hidden xl:hidden">
              <span className="text-xs">{formattedDate}</span>
            </div>

            <div className=" mt-1 hidden lg:block ">
              <Progress
                value={item.progressPercentage || 5}
                size="sm"
                borderRadius="1rem"
                colorScheme="blue"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 md:col-span-3  lg:block md:block col-span-1  ">
        <div className="flex flex-col h-full items-end justify-center  lg:justify-start md:justify-start xl:justify-start   p-1  gap-2">
          <div className="hidden lg:block md:block xl:block">
            <div className="flex gap-1 ">
              <Tooltip
                colorScheme={currentPalette.colorScheme}
                label={
                  item.taskPriority === "medium"
                    ? "Medium priority"
                    : item.taskPriority === "high"
                    ? "High Priority"
                    : "Low Priority"
                }
              >
                <div className="hover:cursor-pointer">
                  <div className=" items-center flex">
                    <Badge
                      textTransform="capitalize"
                      colorScheme={
                        item.taskPriority === "medium"
                          ? "yellow"
                          : item.taskPriority === "high"
                          ? "red"
                          : "green"
                      }
                    >
                      {item.taskPriority === "medium"
                        ? "Mid Priority"
                        : item.taskPriority === "high"
                        ? "High Priority"
                        : "Low Priority"}
                    </Badge>
                  </div>
                </div>
              </Tooltip>
              {item.progressPercentage === 100 ? (
                <Badge textTransform="capitalize" colorScheme="green">
                  Completed
                </Badge>
              ) : (
                <Badge textTransform="capitalize" colorScheme="red">
                  Due
                </Badge>
              )}
            </div>
          </div>

          <div className="flex gap-1   flex-col-reverse md:flex-row lg:flex-row    justify-center lg:justify-start md:justify-start xl:justify-start  items-end">
            <Tooltip label="Delete">
              <Button
                title="Delete Task"
                size={{ base: "sm", md: "sm", lg: "sm", sm: "sm" }}
                isLoading={deleteLoading}
                onClick={handleDelete}
                color="red"
                variant="outline"
              >
                <MdDeleteOutline />
              </Button>
            </Tooltip>
            <Tooltip label={copied ? "Copied!" : "Copy"}>
              <Button
                title="Copy Task"
                size={{ base: "sm", md: "sm", lg: "sm", sm: "sm" }}
                variant="outline"
                onClick={handleCopy}
              >
                {copied ? <FaCopy /> : <FaRegCopy />}
              </Button>
            </Tooltip>

            <DashboardModal
              listState={item}
              Title="Update Task"
              Body="TaskModal"
              Type="list"
            />
          </div>

          <div className="hidden lg:block md:block xl:block">
            <div className="  flex justify-end rounded-sm text-[9px] font-semibold">
              <div fontSize="x-small">{formattedDate}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
