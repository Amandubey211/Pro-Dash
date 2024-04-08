import {
  Badge,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import React from "react";
import { formatDate } from "../../Utils/Formatter";
import { useSelector } from "react-redux";

const ProjectCardDetail = ({ data }) => {
  const formattedStarDate = formatDate(data?.startDate);
  const formattedendDate = formatDate(data?.endDate);
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  return (
    <>
      <div
        className="flex justify-between items-center px-2 "
        // style={{ backgroundColor: currentPalette.primary }}
      >
        <div className="p-1">
          <b className="text-xl capitalize">{data?.title}</b>
        </div>
        <div className="flex justify-center">
          <Badge
          fontSize="x-small"
            colorScheme={
              data?.size === "large"
                ? "red"
                : data?.size === "medium"
                ? "yellow"
                : "green"
            }
          >
            {data?.size === "large"
              ? "Enterprise-scale "
              : data?.size === "medium"
              ? "Medium-scale "
              : "Small-scale "}
          </Badge>
        </div>
      </div>

      <div
        className="flex px-2 justify-between  p-2 items-center"
        style={{ backgroundColor: currentPalette.accent }}
      >
        <div className="flex flex-col ">
          <div className="flex justify-start">
            <Badge fontSize="xx-small">Created By,</Badge>
          </div>

          <b className="lg:text-md text-sm capitalize">{data?.createdBy?.substring(0,16)}</b>
          <div>
            <p className="text-[10px]">
              {formattedStarDate} - {formattedendDate}
            </p>
          </div>
          <p className="text-[11px] capitalize">role: {data?.role}</p>
        </div>
        <div className="flex-col gap-1 items-center justify-center  flex ">
          <CircularProgress
            value={data?.progressPercentage}
            size="4rem"
            color="green.400"
          >
            <CircularProgressLabel>
              {data?.progressPercentage}%
            </CircularProgressLabel>
          </CircularProgress>
        </div>
      </div>
    </>
  );
};

export default ProjectCardDetail;
