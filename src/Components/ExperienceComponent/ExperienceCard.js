import React, { useState } from "react";
import { formatDate } from "../../Utils/Formatter";
import { Badge, Button, Tooltip } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { FaCopy, FaRegCopy } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import ExperienceModal from "./ExperienceModal";
import toast from "react-hot-toast";
import useDeleteExperience from "../../Hooks/CustomExperienceHooks/useDeleteExperience";
import { FcApproval } from "react-icons/fc";

const ExperienceCard = ({ data }) => {
  const startDate = formatDate(data.startDate);
  const endDate = formatDate(data.endDate);
  const [copied, setCopied] = useState(false);
  const { deleteExperience } = useDeleteExperience();
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );

  const handleCopy = () => {
    setCopied(true);
    const textToCopy = `Company: ${data.company},Role:${
      data.role
    } From : ${startDate}- ${endDate}, Description: ${
      data.description
    } skills Used : ${data.skillsUsed.map((data) => {
      return data;
    })}`;
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
  const handleDelete = () => {
    deleteExperience(data._id);
  };
  return (
    <div
      className="h-80  p-2 lg:w-96 w-full  shadow-2xl rounded-xl"
      style={{ backgroundColor: currentPalette.primary }}
    >
      <div className="flex px-2 py-1 justify-between items-center">
        <span className="font-semibold text-lg uppercase">{data.company}</span>

        <div className="flex gap-1    justify-start items-center">
          <Tooltip label={copied ? "Copied!" : "Copy"}>
            <Button size="xs" onClick={handleCopy}>
              {copied ? <FaCopy /> : <FaRegCopy />}
            </Button>
          </Tooltip>
          <Tooltip label="Delete">
            <Button
              size="xs"
              // isLoading={deleteLoading}
              onClick={handleDelete}
              color="red"
            >
              <MdDeleteOutline className="" />
            </Button>
          </Tooltip>
          <ExperienceModal type="update" experiencState={data} />
        </div>
      </div>
      <hr />
      <div className="flex p-2 gap-2 flex-col">
        <div className="flex justify-between items-center  ">
          <div className="flex gap-1 items-center">
            <span className="font-semibold  capitalize text-md">
              {" "}
              {data.role.substring(0, 20)}
            </span>

            <FcApproval />
          </div>
          <span className="text-xs">
            {startDate} - {endDate}
          </span>
        </div>
        <div className="flex justify-start ">
          {" "}
          <Badge fontSize="xx-small">Description</Badge>
        </div>

        <div
          className="p-2 rounded-md shadow-inner overflow-hidden h-32"
          style={{ backgroundColor: currentPalette.accent, overflowY: "auto" }}
        >
          <p
            className="text-sm"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              overflow: "hidden",
            }}
          >
            {data.description}
          </p>
        </div>
        <hr />
        <div className="flex flex-col   ">
          <div className="flex justify-start">
            <b className="text-sm">Skills Used</b>
          </div>
          <div className="flex items-center  flex-wrap py-2 gap-2 px-4 ">
            {data?.skillsUsed.length === 0 && (
              <div className="text-center">No Data Found</div>
            )}
            {data?.skillsUsed.map((data, i) => {
              return (
                <Badge fontSize="x-small" key={i}>
                  {data}
                </Badge>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
