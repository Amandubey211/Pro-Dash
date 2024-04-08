import React from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Progress,
} from "@chakra-ui/react";
import { FcBullish } from "react-icons/fc";
import { useSelector } from "react-redux";
import useGetStats from "../../Hooks/CustomUserInfoHooks/useGetStats";
import ProfileOverview from "../DashBoardComponents/ProfileOverview";

const StatsBody = () => {
  useGetStats();
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  const UserStats = useSelector((store) => store.user.userStats);
  return (
    <div className="p-2  rounded-3xl">
      <ProfileOverview />
      <div className="mt-7 p-2">
        <div className="flex gap-2 items-center">
          <FcBullish />
          <b>Statstics</b>
        </div>
        <div
          className="mt-3 p-2 ps-5
            rounded-xl "
          style={{ backgroundColor: currentPalette.accent }}
        >
          <StatGroup>
            <Stat>
              <StatLabel>Completed</StatLabel>
              <StatNumber>{UserStats?.totalCompletedTasks || 0}</StatNumber>
            </Stat>

            <Stat>
              <StatLabel>Due</StatLabel>
              <StatNumber>{UserStats.totalDueTasks || 0}</StatNumber>
            </Stat>
          </StatGroup>
        </div>
        <div
          className="mt-3 p-2 flex gap-2 flex-col
            rounded-xl "
          style={{ backgroundColor: currentPalette.accent }}
        >
          <p className="text-sm capitalize">
            precise Task Completion -{" "}
            <b className="text-xs">
              ({UserStats.avgCompletionRate?.toFixed(1)}%)
            </b>
          </p>
          <Progress
            value={UserStats.avgCompletionRate || 0}
            size="sm"
            borderRadius="1rem"
            colorScheme="blue"
          />
        </div>

        <div
          className="mt-3 p-2 flex gap-2 flex-col
            rounded-xl "
          style={{ backgroundColor: currentPalette.accent }}
        >
          <p className="text-sm capitalize">
            Task Completion -
            <b className="text-xs">
              ({UserStats.overallCompletionPercentage?.toFixed(1)}%)
            </b>
          </p>
          <Progress
            value={UserStats.overallCompletionPercentage || 0}
            size="sm"
            borderRadius="1rem"
            colorScheme="blue"
          />
        </div>
      </div>
    </div>
  );
};

export default StatsBody;
