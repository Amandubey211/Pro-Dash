import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import {
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

import { selectPalette } from "../../Redux/Slices/ThemeSlice.js";
import { IoColorPalette } from "react-icons/io5";
import ThemeColors from "../../Data/ThemeData/ThemeColors.js";

const ThemeComponent = ({ mobile }) => {
  const currentTheme = useSelector((store) => store.themes.currentPalette);
  const dispatch = useDispatch();
  return (
    <Popover placement={mobile ? "auto" : "right-end"}>
      <PopoverTrigger>
        <button title="theme">
          <IoColorPalette title="theme" className="text-2xl cursor-pointer" />
        </button>
      </PopoverTrigger>

      <Portal>
        <PopoverContent
        //  bg={currentPalette.primary}
        >
          <PopoverArrow />
          <PopoverHeader>
            <div className="text-center font-bold">Choose Palette Color</div>
          </PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <div className="flex gap-2 justify-center items-center">
              {ThemeColors.map((data, i) => {
                return (
                  <div
                    key={data.id}
                    className="flex gap-1 justify-center items-center flex-col"
                  >
                    <button
                      title={data.palette}
                      onClick={() => {
                        dispatch(selectPalette(data.palette));
                        toast.success(`Palette set to "${data.palette}"`, {
                          position: "bottom-left",
                        });
                      }}
                      className={` h-9 w-9 hover:border-blue-700 border-2 rounded-lg ${
                        data.palette === currentTheme &&
                        "scale-125  border-black border-2"
                      } `}
                      style={{ backgroundColor: `${data.color}` }}
                    ></button>
                    <span className="text-[9px]">{data.palette}</span>
                  </div>
                );
              })}
            </div>
          </PopoverBody>
          <PopoverFooter>
            {" "}
            <div className="text-red-500 text-center"> Optimizing it soon</div>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default ThemeComponent;
