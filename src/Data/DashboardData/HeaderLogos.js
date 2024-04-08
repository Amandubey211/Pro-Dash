import { IoIosSunny } from "react-icons/io";
import { TbSunset2 } from "react-icons/tb";
import { FcLandscape } from "react-icons/fc";
import { FcNightLandscape } from "react-icons/fc";
import { IoNotifications } from "react-icons/io5";
export const HeaderLogos = {
  morning: <FcLandscape />,
  afterNoon: <IoIosSunny className="text-yellow-300 custom-spin" />,
  evening: <TbSunset2 className="text-orange-400" />,
  night: <FcNightLandscape />,
  notification: <IoNotifications className="text-xs lg:text-xl " />,
};
