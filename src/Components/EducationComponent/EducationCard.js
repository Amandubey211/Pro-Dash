import { Badge, Tooltip, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import EducationModal from "./EducationModal";
import { FaCopy, FaRegCopy, FaUserGraduate } from "react-icons/fa";
import toast from "react-hot-toast";
import { MdDeleteOutline } from "react-icons/md";
import useDeleteEducation from "../../Hooks/CustomEducationHooks/useDeleteEducation";
import {
  FcCalendar,
  FcDepartment,
  FcGlobe,
  FcGraduationCap,
  FcReading,
} from "react-icons/fc";

const EducationCard = ({ data }) => {
  const [copied, setCopied] = useState(false);
  const { deleteEducation } = useDeleteEducation();
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );

  const handleCopy = () => {
    const textToCopy = `Degree: ${data.degree}, in ${data?.fieldOfStudy}, Date: ${data.startYear} - ${data.endYear}, Institution: ${data?.institution}, GPA: ${data?.GPA}/10`;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast.success("Education Info Copied", { position: "bottom-left" });
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => {
        console.error("Failed to copy text:", error);
      });
  };

  const handleDelete = () => {
    deleteEducation(data._id);
  };

  return (
    <div
      className="flex flex-col shadow-2xl rounded-2xl py-1 min-h-60 w-full lg:w-[35%]"
      style={{ backgroundColor: currentPalette.primary }}
    >
      <div
        className="flex justify-between   p-2 m-1 items-center rounded-lg"
        style={{ backgroundColor: currentPalette.accent }}
      >
        <div className="flex gap-1 items-center ">
          <FaUserGraduate />
          <b className="uppercase text-xl">{data?.degree}</b>
        </div>
        <div className="flex gap-1    justify-start items-center">
          <Tooltip label="Delete">
            <Button
              size="sm"
              title="delete"
              // isLoading={deleteLoading}
              onClick={handleDelete}
              color="red"
            >
              <MdDeleteOutline className="" />
            </Button>
          </Tooltip>
          <Tooltip label={copied ? "Copied!" : "Copy"}>
            <Button title="copy Education Info" size="sm" onClick={handleCopy}>
              {copied ? <FaCopy /> : <FaRegCopy />}
            </Button>
          </Tooltip>
          <EducationModal
            eduState={data}
            title="Update Education"
            type="update"
          />
        </div>
      </div>

      <div className="p-1">
        <div className="flex justify-between p-1 m-1 rounded-xl">
          <div className="flex flex-col gap-1  capitalize">
            <div className="flex gap-1 items-center ">
              <FcReading />
              <b>{data?.fieldOfStudy}</b>
            </div>
            <div className="flex gap-1 items-center ">
              <FcDepartment />
              <b className="text-sm">{data?.institution}</b>
            </div>
            <div className="flex gap-1 items-center ">
              <FcGlobe />
              <span className="text-xs">{data?.institutionLocation}</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center gap-1 ">
              <FcCalendar />
              <Badge fontSize="x-small">{`${data.startYear} - ${data.endYear}`}</Badge>
            </div>
            <span className="text-xs">
              GPA: <b className="text-xl">{data?.GPA}</b> /10
            </span>
          </div>
        </div>
        <div
          className="flex flex-col mt-2 rounded-lg p-1"
          style={{ backgroundColor: currentPalette.accent }}
        >
          <span className="text-sm font-bold">About</span>
          <div
            className="p-2 rounded-md  overflow-hidden h-16"
            style={{ overflowY: "auto" }}
          >
            <p
              className="text-sm"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                overflow: "hidden",
              }}
            >
              {data?.description ||
                "Adding the description field greatly improves profile completeness and engagement. Thank you for your attention to detail!"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
