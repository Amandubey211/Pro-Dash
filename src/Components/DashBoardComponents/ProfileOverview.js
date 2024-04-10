import React from "react";
import { FcDoughnutChart, FcHighPriority } from "react-icons/fc";
import { useSelector } from "react-redux";
import {
  Badge,
  CircularProgress,
  CircularProgressLabel,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

const ProfileOverview = () => {
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  const ProfileCompletness = useSelector(
    (store) => store.user.userProfileCompletnessPercentage
  );
  const missingProfileData = useSelector(
    (store) => store.user.userProfileMissing
  );
  return (
    <div
      className="p-2 rounded-2xl"
      style={{ backgroundColor: currentPalette.accent }}
    >
      <div className="flex gap-1  items-center">
        <FcDoughnutChart />
        <div>Profile Overview </div>
      </div>
      <div className="mt-1 flex gap-2 items-center justify-center">
        <div className="flex p-1 flex-col items-center justify-center gap-2 ">
          <CircularProgress
            color="green.400"
            size="8rem"
            value={ProfileCompletness || 5}
          >
            <CircularProgressLabel fontSize="1.5rem">
              {ProfileCompletness ? ProfileCompletness.toFixed(1) : 5}%
            </CircularProgressLabel>
          </CircularProgress>
          <Badge colorScheme={currentPalette.colorScheme} fontSize="x-small">
            Profile Score
          </Badge>
        </div>
      </div>
      <div className="text-xs capitalize pt-2 ">
        {ProfileCompletness !== 100 && (
          <Popover zIndex={50}>
            <PopoverTrigger>
              <div className="flex items-center cursor-pointer hover:underline gap-1 justify-center ">
                <FcHighPriority className="text-md" />
                <span className="text-red-300"> Discover what's missing</span>
              </div>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />

                <PopoverCloseButton />
                <PopoverBody>
                  <div className="flex  flex-col justify-center items-center gap-2 ">
                    {missingProfileData.map((data, i) => {
                      return (
                        <Badge colorScheme="red" key={i}>
                          {data}
                        </Badge>
                      );
                    })}
                  </div>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        )}
      </div>
    </div>
  );
};

export default ProfileOverview;
